const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    Subject: {type: String, required: true, maxlength: 100},
    ShortDescription: { type: String, maxlength: 500 },
    LongDescription: {
        type: String,
        maxlength: 8000
    },
    CustomerType: [ {
        type: String
        //possibly add enum
    } ],
    PlannedDateOfSending: { type: Date, default: null},
    isPublished: { type: Boolean, default: false },
    Deleted: { type: Boolean, default: false },

});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;