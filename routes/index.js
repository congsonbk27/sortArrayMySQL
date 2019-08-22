var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "sondb"
});

con.connect(function (err) {
  if (err) {
    res.render('error', {
      title: 'error',
      err: err
    });
    throw err;
  }
  console.log("Connected!");
});



/* GET home page. */
router.get('/', function (req, res, next) {
  var inputString = req.query.inputString;
  console.log('inputString:', inputString);

  var arrayInput = inputString.split(",");
  console.log('arrayInput:', arrayInput);

  var inputString_1 = arrayInput.join(" a ");
  console.log('inputString_1:', inputString_1);

  var arrayNumber = arrayInput.map(function (item) {
    return parseInt(item, 10);
  });
  console.log('arrayNumber:', arrayNumber);

  var arraySorted = arrayNumber.sort(function (a, b) { return a - b });
  console.log('arrayNumber Sorted:', arrayNumber);

  var stringOutput = arraySorted.join(" a ");
  console.log('stringOutput:', stringOutput);

  if (stringOutput != NaN) {
    insertDatatoTable(inputString_1, stringOutput);
  }

  res.render('index', {
    title: 'Express',
    inputString: inputString,
    arraySorted: arraySorted
  });
});

function insertDatatoTable(inputString, stringOutput) {
  // con.connect(function (err) {
  // if (err) throw err;
  console.log("Connected!");
  var sql = 'INSERT INTO stringArray (stringInput, stringSorted) VALUES ("' + inputString + '","' + stringOutput + '")';
  console.log('sql : ' + sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERT INTO stringArray OK");
  });
  // });
}


module.exports = router;
