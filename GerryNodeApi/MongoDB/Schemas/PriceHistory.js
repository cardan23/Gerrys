const mongoose = require('mongoose');

const priceHistorySchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    Service: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    Price: { type: mongoose.Schema.Types.Decimal128, required: true, min: 0 },
    
});

const PriceHistory = mongoose.model('PriceHistory', priceHistorySchema);

module.exports = PriceHistory;