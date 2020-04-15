
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database')
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.log("Couln't connect to MongoDB...", err));

module.exports = mongoose;