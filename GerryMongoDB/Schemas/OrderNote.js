const mongoose = require('mongoose');

const orderNoteSchema = new mongoose.Schema({

    Note: { type: String, required: true, maxlength: 2000 },
    NameFile: { type: String, maxlength: 100 },
    FileUrl: { type: String, maxlength: 2000 },
    DisplayCustomer: { type: Boolean, default: false},
    Deleted: { type: Boolean, default: false}

});

const OrderNote = mongoose.model('OrderNote', orderNoteSchema);

module.exports = OrderNote;