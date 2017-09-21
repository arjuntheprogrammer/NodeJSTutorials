var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var query = { address: /^A/ };

    db.collection("customers").deleteMany(query, function(err, res) {
        if (err) throw err;
        console.log(res.result.n + " document(s) deleted!!!");
        db.close();
    });
});