const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({

    Name: { type: String, required: true, maxlength: 100 },
    ShortDescription: { type: String, maxlength: 500 },
    LongDescription: {
        type: String,
        maxlength: 8000
    },
    TypeDiscount: [ String ],
    StartDate: { type: Date, default: Date.now },
    EndDate: { type: Date, default: null },
    isPublished: { type: Boolean, default: false },
    DiscountPercentage: { 
        type: mongoose.Schema.Types.Decimal128, 
        default: 0, 
        required: function(){ return this.UsePercentage } 
    },
    DiscountAmount: {
         type: mongoose.Schema.Types.Decimal128, 
         default: 0, 
         required: function(){ return !this.UsePercentage } 
    },
    UsePercentage: { type: Boolean, default: false },
    Deleted: { type: Boolean , default: false }
    
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;