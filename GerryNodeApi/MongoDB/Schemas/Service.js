const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    Sku: { type: String, maxlength: 100 },
    ShortDescription: { type: String, maxlength: 500 },
    LongDescription: { type: String, maxlength: 8000 },
    Categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    Tags: [ String ],
    CallForPrice: { type: Boolean, default: false },
    FreeOfRate: { type: Boolean, default: true },
    CurrentPrice: { type: Schema.Types.Decimal128, required: true, min: 0 },
    Images: [ { type: String, maxlength: 2000 } ],
    MetaKeyWords: [{ type: String, maxlength: 50 }],
    MetaTitle: { type: String, maxlength: 100 },
    FriendlyPageName: { type: String, maxlength: 100 },
    isPublished: { type: Boolean, default: false },
    Deleted: { type: Boolean, default: false }

});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;