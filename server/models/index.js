const mongoose = require('mongoose');


module.exports.connect = (uri) => {
  // mongoose.connect(uri);
  // // plug in the promise library:
  // mongoose.Promise = global.Promise;

  // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
  var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/katennaUsers";

  // Set mongoose to leverage built in JavaScript ES6 Promises
  // Connect to the Mongo DB
  mongoose.Promise = Promise;
  mongoose.connect(MONGODB_URI, {
    useMongoClient: true
  });



  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./task');
  require('./user');

};





