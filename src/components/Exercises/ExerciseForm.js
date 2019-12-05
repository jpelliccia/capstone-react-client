import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const ExerciseForm = ({ exercise, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Create an exercise!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          id="name"
          placeholder="Exercise Name"
          value={exercise.name}
          name="name"
          onChange={handleChange}
        />

        <Form.Label htmlFor="reps">Reps</Form.Label>
        <Form.Control
          id="reps"
          placeholder="Reps"
          value={exercise.reps}
          name="reps"
          onChange={handleChange}
        />

        <Form.Label htmlFor="sets">Sets</Form.Label>
        <Form.Control
          id="sets"
          placeholder="Sets"
          value={exercise.sets}
          name="sets"
          onChange={handleChange}
        />

        <Form.Label htmlFor="weight">Weight</Form.Label>
        <Form.Control
          id="weight"
          placeholder="Weight...lbs or kg"
          value={exercise.weight}
          name="weight"
          onChange={handleChange}
        />

        <Form.Label htmlFor="date">Date</Form.Label>
        <Form.Control
          id="date"
          placeholder="YYYY-MM-DD"
          value={exercise.date}
          name="date"
          onChange={handleChange}
        />

        <Button variant="outline-success" type="submit">Submit</Button>
        <Link to={cancelPath}>
          <Button variant="outline-danger" className="float-right" type="button">Cancel</Button>
        </Link>
      </Form>
    </div>
  </div>
)

export default ExerciseForm
