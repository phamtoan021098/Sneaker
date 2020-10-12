const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Cart = new Schema({
    id:{
        type:String 
    },
    price: {
        type: Number
    },
    img: {
        type: String
    },
    name: {
        type: String
    },
    size:{
        type:String
    },
    quantity:{
        type:Number
    },
    user:{
        type:String
    },
    discount:{
        type:Number
    }
}, {
    collection: 'carts'
});

module.exports = mongoose.model('Cart',Cart);