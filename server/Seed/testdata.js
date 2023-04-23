
const mongoose = require('../config/connection');
const Entry = require('../models/Entry');
const User = require('../models/User');




// function to seed test data
const seedTestData = async () => {
    try {
        // create a new user
        const newUser = new User({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123'
        });

        // save the user to the database
        const savedUser = await newUser.save();

        // create a new entry
        const newEntry = new Entry({
            date: '2023-04-22',
            location: 'Las Vegas',
            buyIn: 100,
            cashOut: 200,
            hours: 3,
            stake: 'NLH',
            gameType: 'Cash Game',
            user: savedUser._id // set the user reference to the saved user's _id
        });

        // save the entry to the database
        const savedEntry = await newEntry.save();

        console.log('Test data seeded successfully');
    } catch (err) {
        console.error('Error seeding test data:', err);
    }
};

// call the seedTestData function 
seedTestData();
