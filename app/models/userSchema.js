const mongoose = require ('mongoose');

const userSchema = mongoose.Schema ({
    email: {
        type:String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    token:{
        type: String,
        require: false
    },
});

module.exports = mongoose.model ('users', userSchema);