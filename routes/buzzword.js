const express = require('express');
const router = express.Router();

router.route('/')

  .post((req,res) => {
    console.log('req.body:', req.body);
    res.send('posted a new book');
  })

  .put((req,res) => {
    res.send('updated book title');
  })

  .delete((req,res) => {
    res.send('Deleted a book');
  });

module.exports = router;