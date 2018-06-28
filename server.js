const db = require('./db');
const express = require('express');
const app = express();


app.get('/about', (req, res) => res.send('About page'));

app.get('/posts/', (req, res) => {
  res.send(JSON.stringify(db))
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));