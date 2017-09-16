var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'arjun',
    password: 'Qwerty123',
    database: 'mydb'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected");

    var sql = "SELECT * from customers where name='John'";
    con.query(sql, function(err, result, fields) {
        if (err) throw err;
        // console.log(result, fields);
        // console.log(result);
    });

    var sql = "SELECT * from customers where address='Apple st 652'";
    con.query(sql, function(err, result, fields) {
        if (err) throw err;
        // console.log(result, fields);
        console.log(result);
    })

})