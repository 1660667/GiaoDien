const Router = require('express').Router;

const router = new Router();

router.get('/', function(req, res) {
  res.render('home');
  
});






module.exports = router;