const mongoose = require('mongoose');

const AddressSchema = require('./Address');
const PhoneNumberSchema = require('./PhoneNumber');

const customerSchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    LastName: { type: String, required: true, maxlength: 100 },
    CompanyName: { type: String, maxlength: 150 },
    Address: [ AddressSchema ],
    PhoneNumbers: [ PhoneNumberSchema ],
    Images: [ {
        type: String,
        maxlength: 5000
    }],
    Quality: { type: Schema.Types.Decimal128, min: 0 },
    ShortDescription: { type: String, maxlength: 200 },
    Gender: { type: String, required: true, enum: [ 'Male', 'Female'] },
    DateOfBirth: { type: Date },
    Active: { type: Boolean, default: false },
    Email: { type: String, maxlength: 500, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ },
    Password: { type: String, maxlength: 200 },
    Type: [ {
        type: String,
        maxlength: 40
    }],
    Deleted: { type: Boolean, default: false }

});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;