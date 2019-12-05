import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { ListGroup, Button } from 'react-bootstrap'

const Exercise = props => {
  const [exercise, setExercise] = useState('')
  const [deleted, setDeleted] = useState(false)
  const userId = props.user.id
  console.log(userId)

  useEffect(() => {
    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(res => setExercise(res.data.exercise))
      .then(() => props.alert({ heading: 'Success', message: 'You selected an exercise!', variant: 'success' }))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!exercise) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/exercises', state: { msg: 'Exercise succesfully deleted!' } }
    } />
  }

  return (
    <Fragment>
      <ListGroup className='mt-5'>
        <ListGroup.Item>Name: {exercise.name}</ListGroup.Item>
        <ListGroup.Item>Reps: {exercise.reps}</ListGroup.Item>
        <ListGroup.Item>Sets: {exercise.sets}</ListGroup.Item>
        <ListGroup.Item>Weight: {exercise.weight}</ListGroup.Item>
        <ListGroup.Item>Date: {exercise.date}</ListGroup.Item>
      </ListGroup>
      <Link to={`/exercises/${props.match.params.id}/edit`}>
        <Button variant="outline-warning" className="float-left">Edit</Button>
      </Link>
      <Link to={'/exercises'}>
        <Button to="/exercises" className="center-block">Back to exercise log</Button>
      </Link>
      {exercise && userId === exercise.owner && <Button variant="danger">Delete</Button>}
      <Button variant="outline-danger" className="float-right" onClick={destroy}>Delete Exercise</Button>
    </Fragment>
  )
}

export default withRouter(Exercise)
