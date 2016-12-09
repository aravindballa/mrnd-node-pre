var express = require('express');
var router = express.Router();

var leaderboard = require('../public/leaderboard.json');

router.get('/all', function (req, res) {
  console.log(leaderboard.length);
  return res.json(leaderboard);
});

router.get('/stud/:rank', function (req, res) {
  if(leaderboard[req.params.rank]){
    return res.json(leaderboard[req.params.rank]);
  }
  return res.status(404).json({
    message: 'not found',
    error: true,
  });
});

router.post('/stud', function (req, res) {
  if(!req.body.Name || !req.body.College){
    return res.json({
      message: 'not formatted properly',
      error: true,
      data: req.body
    });
  }
  var stud = req.body;
  if(!stud['C-Basics'])
    stud['C-Basics'] = 0;
  if(!stud['C-Arrays-Worksheet'])
    stud['C-Arrays-Worksheet'] = 0;
  if(!stud['C-Strings-Worksheet'])
    stud['C-Strings-Worksheet'] = 0;
  if(!stud['C-Arrays2-Worksheet'])
    stud['C-Arrays2-Worksheet'] = 0;
  if(!stud['C-Strings2-Worksheet'])
    stud['C-Strings2-Worksheet'] = 0;
  if(!stud['C-LinkedList-Worksheet'])
    stud['C-LinkedList-Worksheet'] = 0;
  if(!stud['C-LinkedList2-Worksheet'])
    stud['C-LinkedList2-Worksheet'] = 0;
  if(!stud['C-15Puzzle'])
    stud['C-15Puzzle'] = 0;
  if(!stud['C-Recursion'])
    stud['C-Recursion'] = 0;
  if(!stud['C-BinarySearchTree'])
    stud['C-BinarySearchTree'] = 0;
  if(!stud['Penalty'])
    stud['Penalty'] = 0;

  leaderboard.push(stud);
  return res.json({
    message: 'Success!',
    error: false
  });
});

router.delete('/stud/:rank', function (req, res) {
  if(leaderboard[req.params.rank]){
    console.log('Deleting - ' + leaderboard[req.params.rank].Name);
    leaderboard.pop(req.params.rank);
    return res.json({
      message: 'Success!',
      error: false
    });
  }
  return res.status(404).json({
    message: 'not found',
    error: true,
  });
});

module.exports = router;
