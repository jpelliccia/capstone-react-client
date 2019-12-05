import React, { useState, useEffect, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './Exercises.scss'
import dateFormat from '../../dateFormat.js'

const Exercises = props => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/exercises`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(response => {
        setExercises(response.data.exercises)
      })
  }, [])

  const exercisesJsx = exercises.map(exercise => (
    <Card className="cardlog m-4 p-0" bg="dark" text="white" key={exercise.id}>
      <Card.Body className="text-center">
        <Card.Text className="cardtext">
          {exercise.name}
        </Card.Text>
        <Button className="viewbutton mb-2" href={`#/exercises/${exercise.id}`} variant="outline-light">View Workout</Button>
        <Card.Footer style={{ color: 'green', fontSize: '1.5rem' }}>
          {dateFormat(new Date(exercise.date))}
        </Card.Footer>
      </Card.Body>
    </Card>
  ))
  // }

  return (
    <Fragment>
      <h1 className="text-center logtitle">Exercise Log</h1>
      <Container className="d-flex flex-row justify-content-center">
        <div className="row d-flex flex-row justify-content-center">
          {exercisesJsx}
        </div>
      </Container>
    </Fragment>
  )
}

export default Exercises
