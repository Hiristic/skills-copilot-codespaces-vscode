// create web server
const express = require('express');
const app = express();
const port = 3000;

// load the comments
const comments = require('./comments');

// serve the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port);
});
