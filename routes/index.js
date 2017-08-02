var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Ola Node JS! Agora Com NodeMom!");
});

router.get('/', function(req, res, next) {
  res.send("Teste NodeJS");
});

module.exports = router;
