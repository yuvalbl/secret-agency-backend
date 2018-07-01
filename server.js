const db = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/posts');
});

app.get('/posts/', (req, res) => {
  res.send(JSON.stringify(db))
});

// API route /posts/:id ===
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = db.find(post => post.id === id);
  res.send(JSON.stringify(post));
});

app.put('/posts/:id', (req, res) => {
  console.log('request body:', req.body)
  const id = parseInt(req.params.id);
  let post = db.find(post => post.id === id);
  if (post) {

  } else {
    post = {
      id,
      userId: req.body.userId,
      title: req.body.title,
      body: req.body.body
    };
    db.push(post)
  }
  res.send(JSON.stringify(post));
});

// task 1: add app.post(/posts/:id) for changing post title
// task 2: add app.delete(/posts/:id) for deleting a post (no body required)

app.listen(3000,
  () => console.log('Post API server listening on port 3000!')
);