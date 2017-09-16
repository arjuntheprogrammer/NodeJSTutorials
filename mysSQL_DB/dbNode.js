var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'arjun',
    password: 'Qwerty123',
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("Create Database mydb", function(err, result) {
        if (err) throw err;
        console.log("Database Created!");
    });
});