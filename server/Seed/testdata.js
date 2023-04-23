
const mongoose = require('../config/connection');
const Entry = require('../models/Entry');
const User = require('../models/User');




// function to seed test data
const seedTestData = async () => {
    try {
        // create a new user
        const newUser = new User({
            firstName: 'Sammy',
            lastName: 'DAbull',
            email: 'BULL@example.com',
            password: 'password123'
        });

        // save the user to the database
        const savedUser = await newUser.save();

        // create a new entry
        const newEntry = new Entry({
            date: '2023-05-25',
            location: 'Las Vegas',
            buyIn: 1000,
            cashOut: 2500,
            hours: 7,
            stake: '2/5',
            gameType: 'PLO',
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
