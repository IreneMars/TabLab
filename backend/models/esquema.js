const mongoose = require('mongoose');

const esquemaSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'The title is mandatory'], 
        minLength: 1, 
        maxLength: 100 
    },
    contentPath: { 
        type: String, 
        required: true 
    },
    creationMoment: { 
        type: Date, 
        required: false 
    },
    datafile: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Datafile", 
        required: true 
    }
});

esquemaSchema.pre('save', function(next) {
    this.creationMoment = Date.now();
    next();
});

module.exports = mongoose.model('Esquema', esquemaSchema);