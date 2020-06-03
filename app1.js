
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

//const CONNECTION_URL = 'mongodb://127.0.0.1:27017'
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster1-gw7ks.mongodb.net/test?retryWrites=true&w=majority";

const DATABASE_NAME = "dbproject";
 
 
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection_users  , collection_vehicles;
 
app.listen(8080, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true },{ useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection_users = database.collection("users");
        collection_vehicles = database.collection("vehicles");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});


app.post("/createuser", (request, response) => {
    collection_users.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.post("/createvehicle", (request, response) => {
    collection_vehicles.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.post("/createbooking", (request, response) => {
    collection_vehicles.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});