// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a list of comments
var comments = [
  {id: 1, author: "Bryan", text: "Wow this is neat!"},
  {id: 2, author: "You", text: "You're __right!__"}
];

// Serve comments
app.get('/api/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

// Add a comment
app.post('/api/comments', function(req, res) {
  var newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(newComment));
});

app.listen(9000);
console.log('Server started: http://localhost:9000/');