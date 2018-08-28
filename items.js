const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
    {
        barcode:{type:String, required:true},
        name:{type:String},
        unit:{type:String},
        price:{type:String},
        promotion:{type:String},
    },
    {timestamps: true}
);

module.exports = mongoose.model('Item', MovieSchema);