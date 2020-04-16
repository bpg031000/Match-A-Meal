const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb://localhost:27017`;

var _db;

module.exports = {
  connectToServer: (cb)=>{
    MongoClient.connect( uri, {useNewUrlParser: true }, ( err, client ) => {
      _db = client.db('matchameal');
      return cb( err );
    } );
  },

  getDb: ()=>{
    return _db;
  }
};

// const client = new MongoClient(uri, { useNewUrlParser: true });



// client.connect().then(()=>{
//   console.log('connected');
// });

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/matchameal');

// var db = mongoose.connection;

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

// var locationSchema = mongoose.Schema({
//   name: String,
//   imageURL: String,
//   details: String
// });

// var Location = mongoose.model('Location', locationSchema);

// var selectAll = function(callback) {
//   Location.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;