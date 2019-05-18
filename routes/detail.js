const Router = require('express').Router;

const router = new Router();

router.get('/detail', function(req, res) {
  res.render('detail');
  
});

module.exports = router;