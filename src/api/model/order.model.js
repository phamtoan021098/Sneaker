const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Orders = new Schema({
    user:{
        type:String
    },
    cartid:{
        type:String
    },
    itemid:{
        type:String
    },
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    size:{
        type:String
    },
    img:{
        type:String
    },
    status:{
        type:String
    },
    datetime:{
        type:String
    },
    discount:{
        type:Number
    }
}, {
    collection: 'order'
});

module.exports = mongoose.model('Orders', Orders);