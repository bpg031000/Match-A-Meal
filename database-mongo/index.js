var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/matchameal');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var locationSchema = mongoose.Schema({
  title: String,
  photoURL: String,
  details: String
});

var Location = mongoose.model('Location', locationSchema);

var selectAll = function(callback) {
  Location.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;