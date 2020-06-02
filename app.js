/* const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)
=> {
 if (error) {
 return console.log('Unable to connect to database!') // The Return command will stop the script if this line happen
 }
 const db = client.db(databaseName)

 // Start to interact with the database
})

*/


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
 
// Database Name
const dbName = 'dbproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, {useUnifiedTopology: true} , function(err, client) {
  
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  db.collection('users').insertOne({
   name: 'ANdrew',
   age: 27
  })
  //client.close();
});

/*
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  */