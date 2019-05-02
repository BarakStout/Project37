var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(req);
  //console.log("res: " + res);
  //console.log("next: " + next);

  res.send('hi from api');
});

router.post('/notes', (req, res) => {
    // You'll create your note here.
    console.log(req.query.name);
    res.send('Hello')
  });
module.exports = router;
