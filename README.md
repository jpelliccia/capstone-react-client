# betterYOU --- Workout Log

<a href="https://imgur.com/DpX2xyS"><img src="https://i.imgur.com/DpX2xyS.png" title="source: imgur.com" /></a>

This application allows the user to sign-up and sign-in with their specific account created. After a successful sign-up or sign-in a user will be able to create an exercise that they may have completed or plan to complete. If any errors are made within this process they are able to either edit or delete that current exercise. They are also given an exercise log where they can view their exercises and it is labeled with the title and date with a button that will show them the weight/reps/sets they inputed for that workout. There is also a tutorials page with basic youtube video's specific to each muscle group where the user can get an idea of what exercises they may want to do and later log them. Finally a user is able to change their password and sign-out.

## Setup Steps

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository.
1. Run `npm install` to install all dependencies
1. Use `npm start` to spin up the server.

## Important Links

- [Deployed API](https://nameless-dusk-30695.herokuapp.com)
- [Deployed Client](https://jpelliccia.github.io/capstone-react-client/)

## Planning Story

Initially I wanted to create a nutrition and exercise tracker, but for the sake of time I figured to just go for a workout log. I have been going to the gym a lot lately and figured for my project it would be cool to create something I am passionate about. I love working out so creating something fitness related is exactly where I wanted to go with this project. Thus, betterYOU was born!

### User Stories
<a href="https://imgur.com/x7NUajw"><img src="https://i.imgur.com/x7NUajw.png" title="source: imgur.com" /></a>
- As a user I want to sign in/up
- As a user I want to create a new exercise.
- As a user I want to view multiple exercises.
- As a user I want to view a single exercise created.
- As a user I want to update an exercise.
- As a user I want to delete an exercise.

### Technologies Used

- React
- SCSS
- React Bootstrap
- Javascript

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /exercises
GET | /exercises/:id
POST | /exercises
PATCH | /exercises/:id
DELETE | /exercises/:id

### Unsolved Problems

- Still need to work on my YouTube component to stop the video's from continuously loading.
- Would like to eventually clean up the exercise log better with images a user uploads.
- Would like to eventually add a calender component where a user can click a date on the calender and add their workout directly there.
- Thinking of creating a random workout generator so that if someone is unsure of which workout to do for that day, the generator will give them a random muscle group with workouts to do for that day.

## Images



### Wireframe:
<a href="https://imgur.com/ubIgcfO"><img src="https://i.imgur.com/ubIgcfO.png" title="source: imgur.com" /></a>

---
### ERD:
<a href="https://imgur.com/pbee4xZ"><img src="https://i.imgur.com/pbee4xZ.png" title="source: imgur.com" /></a>
