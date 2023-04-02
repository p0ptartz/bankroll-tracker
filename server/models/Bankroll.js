
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');


const bankrollSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
});

const Bankroll = mongoose.model('Bankroll', bankrollSchema);

module.exports = Bankroll;