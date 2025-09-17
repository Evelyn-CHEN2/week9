const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client) {
    if (err) {
        return console.log(err)
    }
    const dbName = 'mydb';
    const db = client.db(dbName);

    var querycb = require('./add.js')
    querycb.adddata (db, function(res){
        console.log(res)
    });

})