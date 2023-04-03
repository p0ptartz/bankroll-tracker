
const { Schema, model } = require('mongoose');

const entrySchema = new Schema({
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    buyIn: {
        type: Number,
        required: true,
        min: 0,
    },
    cashOut: {
        type: Number,
        required: true,
        min: 0,
    },
    hours: {
        type: Number,
        required: true,
        min: 0,
    },
    stake: {
        type: String,
        required: true,
        trim: true
    },
    gameType: {
        type: String,
        required: true,
        trim: true
    }
})

const Entry = model('Entry', entrySchema)

module.exports = Entry