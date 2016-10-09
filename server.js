const express = require('express');
const app = express();
const PORT = 1487;
const bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.route('/buzzwords')

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

const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});