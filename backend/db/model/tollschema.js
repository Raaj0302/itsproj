const mongoose = require('mongoose');
const tollSchema = new mongoose.Schema({
    tollname :{
        type: String,
        required: true
    },
    lightvehicle: {
        type: Number,
        // required: true
        },
    heavyvehicle: {
        type: Number,
        // required: true
        }

})
const Toll=mongoose.model('tolls',tollSchema);
module.exports = Toll;