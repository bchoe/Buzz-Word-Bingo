const express = require('express');
const app = express();
const PORT = 1487;
const bodyParser = require('body-parser');
let wordArr = [];

function createBuzzWord(word, points){
  let buzzWords ={
    'buzzWord': word,
    'points': parseInt(points)
  };
  wordArr.push(buzzWords);
  return {success: true};
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.route('/buzzwords')

  .get((req,res) => {
    res.json(wordArr);
  })

  .post((req,res) => {
    let dupFound = wordArr.find((word) => {
      return word.buzzWord === req.body.buzzWord;
    });
    if(!dupFound){
      createBuzzWord(req.body.buzzWord, req.body.points);
    }
    return res.json({
      success: !dupFound
    });
  })

  .put((req,res) => {

  })

  .delete((req,res) => {

  });

const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});