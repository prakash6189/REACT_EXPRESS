var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {"id":1,"username":"prakash"},{"id":2,"username":"chintan"},{"id":3,"username":"ankit"}
  ]);
});

module.exports = router;
