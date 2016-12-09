var express = require('express');
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

//REST API
router.use('/api', require('./api'));

module.exports = router;
