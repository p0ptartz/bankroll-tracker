
const mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bankrollTracker',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB Atlas.');
    }).catch((error) => {
        console.error(error);
    });

module.exports = mongoose.connection;

// || 'mongodb://127.0.0.1:27017/bankrollTracker',