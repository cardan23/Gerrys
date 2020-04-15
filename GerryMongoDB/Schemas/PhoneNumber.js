const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    ShortDescription: { type: String, maxlength: 15 },

});


module.exports = phoneNumberSchema;