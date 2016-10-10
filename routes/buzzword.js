const express = require('express');
const router = express.Router();

let wordArr = [];
let newScore = 0;

function createBuzzWord(buzzWord, points){
  let buzzWords = {
    buzzWord,
    points,
    heard: false
  };
  wordArr.push(buzzWords);
  return {success: true};
}

function getBuzzWord(element){
  let selectedIndex = -1;
  wordArr.forEach((buzz) => {
    if(buzz.buzzWords === element.buzzWords){
      selectedIndex = wordArr.indexOf(buzz);
    }
  });
  return selectedIndex;
}

//to access -----> localhost:1487/buzzwords/jon
router.route('/jon').get((req,res)=> {
  res.send('hello jon');
});
//to access ----> localhost:1487/buzzwords
router.route('/')

  .get((req,res) => {
    let words = wordArr.map((element) => {
      return element.buzzWord;
    });
    res.json(words);
  })

  .post((req,res) => {
    let duplicateFound = wordArr.find((word) => {
      return word.buzzWord === req.body.buzzWord;
    });
    if(!duplicateFound){
      createBuzzWord(req.body.buzzWord, req.body.points);
    }
    return res.json({
      success: !duplicateFound
    });
  })

  .put((req,res) => {
    let selectedBuzzword = getBuzzWord(req.body);
    if(selectedBuzzword > -1){
      let score = parseFloat(wordArr[selectedBuzzword].points);
      score += parseFloat(req.body.points);
      wordArr[selectedBuzzword].points = score;
      res.send(`{"success": true, newScore: ${score} }`);
    } else {
      res.send('{"success": false}');
    }
  })

  .delete((req,res) => {
    let selectedBuzzword = getBuzzWord(req.body);
    if(selectedBuzzword > -1){
      wordArr.splice(selectedBuzzword, 1);
      res.send(`{"success": true}`);
    } else {
      res.send('{"success": false}');
    }
  });

module.exports = router;