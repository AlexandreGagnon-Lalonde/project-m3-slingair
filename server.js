'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { flights } = require('./test-data/flightSeating');

const arrayOfFlights = require('./public/seat-select/js/arrayOfFlights')
const specificFlight = require('./public/seat-select/js/specificFlight')
// const handleFlight = require('./public/seat-select/js/handleFlight')
const createUser = require('./public/seat-select/js/createUser')
const allUsers = require('./public/seat-select/js/allUsers')
const listOfUsers = require('./public/seat-select/js/listOfUsers')

const PORT = process.env.PORT || 8000;


express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  // allows us to "serve" static files (html, css, js) from the folder "public"
  .use(express.static('public'))
  // parses the data in the req.body before the handlers
  .use(bodyParser.json())
  // parses incoming requests if in the form of object and array
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  //// I dont think I need this endpoint, but i keep it there just in case
  // .get('/flights/:flightNumber', handleFlight)
  .get('/slingair/flights', arrayOfFlights) // return array of all flight number
  .get('/slingair/flights/:flight', specificFlight) // return info from specific flight
  .get('/:users', allUsers) // returns info of one user
  .get('/users/all', listOfUsers) // array of all users
  .post('/users', createUser) // create new user

  .use((req, res) => res.send('Not Found'))
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
