const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Sneakers = new Schema({
    id:{
        type:String 
    },
    price: {
        type: Number
    },
    img: {
        type: String
    },
    img1:{
        type:String
    },
    img2:{
        type:String
    },
    name: {
        type: String
    },
    code:{
        type:String
    },
    brand:{
        type:String
    },
    quantity:{
        type:Number
    },
    material:{
        type:String
    },
    color:{
        type:String
    },discount:{
        type:Number
    }
}, {
    collection: 'sneaker'
});

module.exports = mongoose.model('Sneakers',Sneakers);