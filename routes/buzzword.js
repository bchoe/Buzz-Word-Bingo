/*const express = require('express');
const router = express.Router();
let buzzWords = [];

router.route('/')

  .post((req,res) => {
    console.log('req.body:', req.body);
    buzzWords.push(req.body);
    res.send('{"success": true}');
  });




router.get('/:id', (req, res) => {
  console.log("req.params.id: ", req.params.id);
  res.send(req.params.id);
});

module.exports = {router: router, buzzwords: buzzWords};*/