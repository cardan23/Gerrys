const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({

    Name: { type: String, required: true, unique: true, maxlength: 100 },
    Link: { type: String, required: true, maxlength: 5000 },
    ShortDescription: { type: String, maxlength: 500 },
    Images: [ {
            type: String,
            maxlength: 5000
    } ],
    isPublished: { type: Boolean, default: false },
    Deleted: { type: Boolean, default: false }

});

const SocialMedia = mongoose.model('SocialMedia', socialMediaSchema);

module.exports = SocialMedia;