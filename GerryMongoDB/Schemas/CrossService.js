const mongoose = require('mongoose');

const crossServiceSchema = new mongoose.Schema({

    SkuService: { type: String, required: true, maxlength: 150 },
    SkuCrossedService: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true 
    }],
    
});

const CrossService = mongoose.model('CrossService', crossServiceSchema);

module.exports = CrossService;