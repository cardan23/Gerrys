const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({

    Name: { type: String, required: false, maxlength: 100 },
    ShortDescription: { type: String, maxlength: 500 },
    LongDescription: { type: String, maxlength: 8000 },
    RatePercentage: { 
        type: Schema.Types.Decimal128, 
        default: 0, 
        required: function(){ return this.UsePercentage } 
    },
    RateAmount: { 
        type: Schema.Types.Decimal128, 
        default: 0, 
        required: function(){ return !this.UsePercentage } 
    },
    UsePercentage: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
    Deleted: { type: Boolean, default: false },
    
});

const Rate = mongoose.model('Rate', rateSchema);

module.exports = Rate;