// create web server
// create a route that returns all comments
// create a route that adds a new comment
// create a route that deletes a comment
// create a route that updates a comment

const express = require('express');
const app = express();

app.use(express.json());

let comments = [
  {
    id: 1,
    name: 'John Doe',
    content: 'Hello, World!',
  },
  {
    id: 2,
    name: 'Jane Doe',
    content: 'Hi, there!',
  },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    name: req.body.name,
    content: req.body.content,
  };
  comments.push(comment);
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  comments = comments.filter((comment) => comment.id !== parseInt(req.params.id));
  res.json(comments);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  comment.name = req.body.name;
  comment.content = req.body.content;
  res.json(comment);
});

app.listen(3000, () => console.log('Server running on port 3000'));