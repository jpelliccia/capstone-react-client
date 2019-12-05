import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Home.scss'

const Home = () => {
  return (
    <Carousel className='mt-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/9Is50pv.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="image1">
          <h2>betterYOU Workout Log!</h2>
          <p>Helping you keep your workouts logged and consistent</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/WzFQiDd.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Create your own exercises!</h3>
          <p>Create a custom made workout that you did that day!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/cVsdsuU.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 className="captiontest">Consistency is KEY!</h2>
          <p>Log all your workouts to see your progress for each day.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home
