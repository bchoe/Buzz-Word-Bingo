const express = require('express');
const app = express();
const PORT = 1487;
const bodyParser = require('body-parser');
const buzzword = require('./routes/buzzword.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/buzzword', buzzword.router);

app.get('/', (req, res) => {
  res.send('Default');
});

app.get('/buzzwords', (req, res) => {
  res.send(buzzword.buzzwords);
  console.log("buzzword request" + buzzword);
});



const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});