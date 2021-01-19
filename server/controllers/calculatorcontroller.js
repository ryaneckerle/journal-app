const router = require('express').Router();

router.post('/add', function (req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  res.json({
    total: num1 + num2,
  });
});

module.exports = router;
