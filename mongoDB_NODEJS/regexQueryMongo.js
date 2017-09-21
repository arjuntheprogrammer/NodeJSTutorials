//Regular expressions can only be used to query strings.

// To find only the documents where the "address" field 
// starts with the letter "H", use the regular expression 

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var query = { address: /^H/ };

    // var query = { address: "Highway 71" };
    db.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});