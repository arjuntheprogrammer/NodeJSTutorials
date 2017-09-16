var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "arjun",
    password: "Qwerty123",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "Insert Into customers (name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean bead 3'],
    ];

    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted:" + result.affectedRows);

    });


});



// The Result Object
// {
//     fieldCount: 0,
//     affectedRows: 14,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '\'Records:14  Duplicated: 0  Warnings: 0',
//     protocol41: true,
//     changedRows: 0
// }