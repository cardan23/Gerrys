const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    Type: {
        type: String,
        enum: ['Mailing', 'Shipping', 'Billing'],
        required: true
    },
    ShortDescription: { type: String, maxlength: 500 },
    Address: { type: String, required: true, maxlength: 100 },
    State: { type: String, required: true, maxlength: 100 },
    City: { type: String, required: true, maxlength: 100 },
    Country:  { type: String, required: true, maxlength: 100 },
    Colony: { type: String, required: true, maxlength: 100 },
    PostalCode: { type: String, required: true, maxlength: 10 },
    Deleted: { type: Boolean, default: false }

});

module.exports = addressSchema;