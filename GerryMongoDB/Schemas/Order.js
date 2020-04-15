const mongoose = require('mongoose');

const AddressSchema   = require('./Address.js');

const orderSchema = new mongoose.Schema({

    Rates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rate'
    }],
    Services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }],
    TotalOrder: { type: Schema.Types.Decimal128, min: 0 },
    TotalTaxes: { type: Schema.Types.Decimal128, min: 0 },
    OrderSubtotal: { type: Schema.Types.Decimal128, min: 0 },
    Status: { type: String, maxlength: 50 },
    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    PaymentStatus: { type: String, maxlength: 50 },
    PaymentMethod: { type: String, maxlength: 50 },
    OrderStatus: { type: String, maxlength: 50 },
    OrderNumber: { type: String, required: true, minlength: 8 },
    OrderNotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderNote'
    }],
    Addresses: { type: [ AddressSchema ], required: true, minlength: 1 },
    Deleted: { type: Boolean, default: false }

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;