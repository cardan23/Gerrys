
const mongoose = require('mongoose');

function InitDatabase(database){

    mongoose.connect(`mongodb://localhost:27017/${database}`)
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.log("Couln't connect to MongoDB...", err));

}

module.exports = mongoose;
module.exports = InitDatabase;
