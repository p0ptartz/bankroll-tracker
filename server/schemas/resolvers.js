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
        getEntries: async (_, { userId }) => {
            try {
                const entries = await Entry.findById(userId);
                return entries;
            } catch (err) {
                throw new Error('Error getting entries');
            }
        },
        getUserEntries: async (_, { userId }) => {
            const user = await User.findById(userId).populate('entries');
            return user.entries;
        },
    },



    Mutation: {
        signup: async (_, { firstName, lastName, email, password }) => {
            try {
                // Check if email address already exists in the database
                console.log("hello")
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    console.log("user exists")
                    throw new Error('Email address already exists');
                }
                console.log("before bcrypt")
                const salt = await bcrypt.genSalt(10);
                console.log("this is salt " + salt)
                const hashedPassword = await bcrypt.hash(password, salt);
                console.log(hashedPassword)
                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword
                });
                console.log("this is out" + newUser)
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
                console.log('password:', password);
                const user = await User.findOne({ email });
                console.log("this works 1")
                console.log(user)


                if (!user) {
                    console.log("this works 2")
                    throw new Error('Invalid email or password');

                }
                console.log("this works 3")
                // compare the password with stored hashed password
                const passwordMatch = await bcrypt.compare(password, user.password);
                console.log('passwordMatch:', passwordMatch);

                console.log("this works 4")
                if (passwordMatch) {
                    console.log(user)
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
                    user: userId // Link the entry to the user
                })
                console.log("step2" + newEntry)

                await newEntry.save()
                console.log("step3")
                // Update the user's entries field to include the new entry
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

