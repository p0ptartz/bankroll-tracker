
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    entries: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Entry'
        }
    ]
})

const User = model('User', userSchema)

module.exports = User