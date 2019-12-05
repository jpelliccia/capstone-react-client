import React, { useState, useEffect, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ExerciseForm from '../Exercises/ExerciseForm'

const ExerciseEdit = props => {
  const [exercise, setExercise] = useState({ name: '', reps: '', sets: '', weight: '', date: '' })
  const [updated, setUpdated] = useState(null)

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

  const handleChange = event => {
    event.persist()
    setExercise(exercise => ({ ...exercise, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Token token=${props.user.token}`
      },
      data: { exercise }
    })
      .then(() => setUpdated(true))
      .then(() => {
        props.alert({ heading: 'Success', message: 'Updated succesfully!', variant: 'success' })
      })
      .catch(() => {
        props.alert({ heading: 'Failure', message: 'Update failed!', variant: 'danger' })
      })
  }

  if (updated) {
    return <Redirect to='/exercises' />
  }

  return (
    <Fragment>
      <ExerciseForm
        exercise={exercise}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/exercises/${props.match.params.id}`}
        message={'Edit your exercise'}
      />
    </Fragment>
  )
}

export default withRouter(ExerciseEdit)
