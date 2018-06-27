const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', (req, res) => res.send('Home page'));
app.get('/about', (req, res) => res.send('About page'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));