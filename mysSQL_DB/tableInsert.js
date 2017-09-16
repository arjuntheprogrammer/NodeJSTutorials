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

    var sql = "INSERT into customers (name, address) values ('Company11 Inc', 'Highway11 37')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})