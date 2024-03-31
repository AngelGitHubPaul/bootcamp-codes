const express = require('express');
const app = express();
const port = 4000;

app.get('/', function (req, res) {
  res.send('Welcome to my Express.js server!')
})

app.get('/about', function (req, res) {
  res.send('This is the about page.')
})

app.get('/contact', function (req, res) {
  res.send('Contact us at example@email.com')
})

app.listen(port, () => {
  console.log(`Server is live at port ${port}`);
});
