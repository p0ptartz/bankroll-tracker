const Entry = require('../models/Entry')
const User = require('../models/User');
const bcrypt = require('bcrypt');


const resolvers = {
    Query: {
        entries: async () => {
            try {
                const entries = await Entry.find()
                return entries
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getUser: async (_, { userId }) => {
            try {
                console.log('userId:', userId);
                const user = await User.findById(userId)
                console.log('user:', user);
                return user;
            } catch (err) {
                throw new Error('Error getting user');
            }
        },

        getUserEntries: async (_, { userId }) => {
            const user = await User.findById(userId).populate('entries');
            // console.log("this is the user: " + user)
            // console.log("here is the user.entries: " + user.entries)
            return user.entries;

        },
    },



    Mutation: {
        signup: async (_, { firstName, lastName, email, password }) => {
            try {

                const existingUser = await User.findOne({ email });
                if (existingUser) {

                    throw new Error('Email address already exists');
                }

                const salt = await bcrypt.genSalt(10);

                const hashedPassword = await bcrypt.hash(password, salt);

                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword
                });

                // Save the user to the database
                const savedUser = await newUser.save();

                return savedUser;
            } catch (error) {
                throw new Error('Error creating user');
            }
        },
        login: async (_, { email, password }) => {
            try {
                // find the user by email

                const user = await User.findOne({ email }).populate('entries');

                if (!user) {

                    throw new Error('Invalid email or password');

                }

                // compare the password with stored hashed password
                const passwordMatch = await bcrypt.compare(password, user.password);
                console.log('passwordMatch:', passwordMatch);


                if (passwordMatch) {
                    // console.log("user" + user)
                    return user;
                } else {
                    throw new Error('Invalid email or password');
                }
            } catch (error) {
                throw new Error('Error logging in');
            }
        },

        addEntry: async (_, { userId, date, location, buyIn, cashOut, hours, stake, gameType }) => {
            try {
                const user = await User.findById(userId)
                if (!user) {
                    throw new Error(`User with ID ${userId} not found`)
                }
                console.log("step1")
                const newEntry = new Entry({
                    date,
                    location,
                    buyIn,
                    cashOut,
                    hours,
                    stake,
                    gameType,
                    user: userId
                })
                console.log("step2" + newEntry)

                await newEntry.save()
                console.log("step3")

                user.entries.push(newEntry)
                console.log("step4")
                await user.save()
                console.log("step5")
                return newEntry
            } catch (error) {
                throw new Error('Error creating entry' + error)
            }
        }
    }
};

module.exports = resolvers

