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
    var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function(err, result) {
        if (err) throw err;
        console.log(result);
    });



})