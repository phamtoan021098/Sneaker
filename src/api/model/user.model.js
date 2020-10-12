const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Number
    },
    phone:{
        type:Number
    }
}, {
    collection: 'user'
});

module.exports = mongoose.model('User', User);