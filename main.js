//This is to connect to Atlas

const MongoClient = require('mongodb').MongoClient;

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

