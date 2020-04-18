const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({

    Name: { type: String, required: true, unique: true, maxlength: 100 },
    ShortDescription: { type: String, maxlength: 500 },
    LongDescription: { 
        type: String,
        maxlength: 1000
    },
    LanguageCode: { type: String, required: true, unique: true, maxlenght: 10 },
    isPublished: { type: Boolean, default: false },
    Deleted: { type: Boolean, default: false }

});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;