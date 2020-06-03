//This is to connect to Atlas

const MongoClient = require('mongodb').MongoClient;
var express = require("express");
var app = express()

// replace the uri string with your connection string.
const uri = "mongodb+srv://admin:admin@cluster1-gw7ks.mongodb.net/test?retryWrites=true&w=majority";
//mongo "mongodb+srv://cluster1-gw7ks.mongodb.net/test" --username admin

MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});

const DATABASE_NAME = "dbproject";

app.post("/createuser", (request, response) => {
    collection_users.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});