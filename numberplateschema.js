const mongoose = require('mongoose');
const numberplateSchema = new mongoose.Schema({
    numberplate:{
        type: String,
        required: true
    },
    vehicletype:{
        type: String,
        // required: true
    },
    totalfine:{
        type: Number,
        
    }

})
const Numbers=mongoose.model('numbers',numberplateSchema);
module.exports = Numbers;