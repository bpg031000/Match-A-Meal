const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('../database-mongo/mongo.js');
var db;

mongo.connectToServer( (err, client )=>{
  if (err) console.log(err);
  db = mongo.getDb();
  console.log("connected to mongo ");
})



app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/locations', (req, res)=>{
  db.collection('locations2').find().limit(50).toArray()
  .then(data=>{
    res.json(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).end();
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});