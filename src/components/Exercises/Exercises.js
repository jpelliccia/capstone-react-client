import React, { useState, useEffect, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { CardDeck, Card, Button, Col } from 'react-bootstrap'
import axios from 'axios'
import apiUrl from '../../apiConfig'

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
    <div className="row" key={exercise.id}>
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <CardDeck>
          <Card bg="light" text="black">
            <Card.Body>
              <Card.Text>
                <Col>{exercise.name} on {exercise.date}</Col>
              </Card.Text>
              <Button href={`#/exercises/${exercise.id}`} variant="outline-dark">View Workout</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  ))

  return (
    <Fragment>
      <h1>Exercise Log</h1>
      {exercisesJsx}
    </Fragment>
  )
}

export default Exercises
