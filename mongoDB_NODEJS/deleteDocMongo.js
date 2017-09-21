var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var query = { address: 'Mountain 21' };

    db.collection("customers").deleteOne(query, function(err, res) {
        if (err) throw err;
        console.log("1 doc deleted!");
        db.close();
    });
});