'use strict';
require('dotenv').config();
const express = require('express');
// const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views/pug');
fccTesting(app); // For fCC testing purposes
// app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
  // Change the response to render the Pug template
  res.render('index', {
    title: 'FCC Advanced Node', // Untuk | #{title}
    message: 'Please login', // Untuk p#pug-variable=message
    showLogin: true, // Untuk if showLogin
    showRegistration: false, // Untuk if showRegistration
    showSocialAuth: false // Untuk if showSocialAuth
  });
});

module.exports = app;
