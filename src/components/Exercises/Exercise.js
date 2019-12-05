import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { ListGroup, Button } from 'react-bootstrap'

const Exercise = props => {
  const [exercise, setExercise] = useState('')
  const [deleted, setDeleted] = useState(false)
  const userId = props.user.id

  useEffect(() => {
    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(res => setExercise(res.data.exercise))
      .catch(() => {
        props.alert({ heading: 'Ouch', message: 'There was an error, try again.', variant: 'danger' })
      })
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
      .then(() => {
        props.alert({ heading: 'Success', message: 'Exercise Deleted!', variant: 'success' })
      })
      .catch(() => {
        props.alert({ heading: 'Failure', message: 'Delete failed', variant: 'danger' })
      })
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
      <div className="d-flex flex-row justify-content-between">
        <Link to={`/exercises/${props.match.params.id}/edit`}>
          <Button variant="warning">Edit</Button>
        </Link>
        <Link to={'/exercises'}>
          <Button to="/exercises" variant="secondary" text="center" className="align-self-center mx-auto">Back to exercise log</Button>
        </Link>
        {exercise && userId === exercise.owner && <Button variant="danger">Delete</Button>}
        <Button variant="danger" onClick={destroy}>Delete Exercise</Button>
      </div>
    </Fragment>
  )
}

export default withRouter(Exercise)
