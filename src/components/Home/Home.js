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
          <h2 className="slide1">betterYOU Workout Log!</h2>
          <p className="slide1caption">Helping you keep your workouts logged and consistent</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/WzFQiDd.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="slide2">Create a custom made workout!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/cVsdsuU.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 className="slide3">Consistency is KEY!</h2>
          <p className="slide3caption">Log all your workouts to see your progress for each day.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home
