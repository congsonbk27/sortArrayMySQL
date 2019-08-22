var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req.query.count);
  var count = req.query.count;

  var inputString = req.query.inputString;
  console.log('inputString:', inputString);
  var arrayInput = inputString.split(",");
  console.log('arrayInput:', arrayInput);

  var arrayNumber = arrayInput.map(function (item) {
    return parseInt(item, 10);
  });
  console.log('arrayNumber:', arrayNumber);

  var arraySorted = arrayNumber.sort(function (a, b) { return a - b });
  console.log('arrayNumber Sorted:', arrayNumber);

  res.render('index', {
    title: 'Express',
    count: count,
    inputString: inputString,
    arraySorted: arraySorted
  });
});

module.exports = router;
