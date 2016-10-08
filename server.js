const express = require('express');
const app = express();
const PORT = 1487;

app.get('/', (req, res) => {
  res.send('Pen pineapple, Apple pen');
});

const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});