
//Use app:debug enviroment variable to show the debug messages
const debug = require('debug')('app:debug');
const mongoose = require('mongoose');

//TODO: Pass user and password string for mongodb authentication
function InitDatabase(database){

    mongoose.connect(`mongodb://localhost:27017/${database}`)
    .then(() => debug("Connected to MongoDB..."))
    .catch(err => debug("Couln't connect to MongoDB...", err));

}

module.exports = InitDatabase;
