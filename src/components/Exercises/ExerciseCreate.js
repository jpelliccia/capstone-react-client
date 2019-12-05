import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ExerciseForm from '../Exercises/ExerciseForm.js'

const ExerciseCreate = props => {
  const [exercise, setExercise] = useState({ name: '', reps: '', sets: '', weight: '', date: '' })

  const handleChange = event => {
    event.persist()
    setExercise({ ...exercise, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/exercises`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { exercise }
    })
      .then(response => {
        props.alert({ heading: 'Success', message: 'You logged an exercise!', variant: 'success' })
        props.history.push(`/exercises/${response.data.exercise.id}`)
      })
      .catch(console.error)
  }

  return (
    <ExerciseForm
      exercise={exercise}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={'/exercises'}
    />
  )
}

export default withRouter(ExerciseCreate)
