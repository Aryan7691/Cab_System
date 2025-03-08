const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'firstname must be at least 3 characters long'], 
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname must be at least 3 characters long'], 
        }
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'email must be at least 5 characters long'],
    },

    password: {
        type: String,
        required: true,
        select : false,
    },

    socketId: {
        type: String,
    },
});

userSchema.methods.generateAuthToken = function() {
    const userToken = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return userToken;
};

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};


//convert the schema to a model

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;


