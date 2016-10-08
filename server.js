const express = require('express');
const app = express();
const PORT = 1487;
const buzzword = require('./routes/buzzword.js');

app.use(express.static('public'));
app.use('/buzzword', buzzword);

app.get('/', (req, res) => {
  res.send('Default');
});

app.get('/buzzword', (req, res) => {
  res.send('buzzwords');
})



const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});