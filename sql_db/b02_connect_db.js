var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "sondb"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
con.end(function (err) {
    if (err) throw err;
    console.log("Closed!");
});
