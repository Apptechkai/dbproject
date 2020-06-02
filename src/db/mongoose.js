const mongoose = require('mongoose')
//mongoose.connect('mongodb://127.0.0.1:27017/dbproject-api' , { useUnifiedTopology: true } ,{
    //useNewUrlParser: true,
    //useCreateIndex: true
//})


mongoose.connect('mongodb://127.0.0.1:27017/dbproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});