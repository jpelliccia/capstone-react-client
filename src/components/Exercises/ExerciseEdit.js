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
      .catch(console.error)
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
      .catch(console.error)
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
      />
    </Fragment>
  )
}

export default withRouter(ExerciseEdit)
