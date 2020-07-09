'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { flights } = require('./test-data/flightSeating');

const arrayOfFlights = require('./public/seat-select/js/arrayOfFlights')
const specificFlight = require('./public/seat-select/js/specificFlight')
const handleFlight = require('./public/seat-select/js/handleFlight')

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
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get('/flights/:flightNumber', handleFlight)
  .get('/slingair/flights', arrayOfFlights) // return array of all flight number
  .get('/slingair/flights/:flight', specificFlight) // return info from specific flight
  // .get('/slingair/users', allUsers) // return array of all users
  // .post('/slingair/users', createUser) // create new user

  .use((req, res) => res.send('Not Found'))
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
