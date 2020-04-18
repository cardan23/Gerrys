const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    ShortDescription: { type: String, maxlength: 500 },
    LongDescription: {
        type: String,
        maxlength: 8000
    },
    ParentCategory: [ this ],
    Tags: [ {
        type: String,
        maxlength: 50 
    } ],
    Images: [ {
        type: String,
        maxlength: 5000
    }],
    MetaKeyWords: [ {
        type: String,
        maxlength: 50
    }],
    MetaTitle: {
        type: String,
        maxlength: 100
    },
    FriendlyPageName: { 
        type: String,
        maxlength: 50
    },
    isPublished: { type: Boolean, default: false },
    Deleted: { type: Boolean, default: false }

});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;