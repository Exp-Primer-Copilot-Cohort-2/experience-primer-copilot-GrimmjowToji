// Create web server

// Import express module
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser module
const bodyParser = require('body-parser');

// Import mongoose module
const mongoose = require('mongoose');

// Import Comment model
const Comment = require('./models/comment');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = new Comment({
    // Add properties for the comment object
  });
});