var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prog270-Yang' });
});

router.get('/foo', function(req, res, next) {
  console.log("Foo was called");
  res.send({result: 14, bar: 23});
});

module.exports = router;
