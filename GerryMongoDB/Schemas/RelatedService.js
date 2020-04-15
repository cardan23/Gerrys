const mongoose = require('mongoose');

const relatedServiceSchema = new mongoose.Schema({

    SkuService: { type: String, required: true, maxlength: 150 },
    SkuRelatedService: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true 
    }],
    
});

const RelatedService = mongoose.model('RelatedService', relatedServiceSchema);

module.exports = RelatedService;