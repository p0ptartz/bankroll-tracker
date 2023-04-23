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
        }
    },

    Mutation: {
        signup: async (_, { firstName, lastName, email, password }) => {
            try {

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);


                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword
                });

                // save the user to the database
                const savedUser = await newUser.save();


                return savedUser;
            } catch (error) {
                throw new Error('Error creating user');
            }
        },

        login: async (_, { email, password }) => {
            try {
                // find the user by email
                const user = await User.findOne({ email });


                if (!user) {
                    throw new Error('Invalid email or password');
                }

                // compare the password with stored hashed password
                const passwordMatch = await bcrypt.compare(password, user.password);


                if (passwordMatch) {
                    return user;
                } else {
                    throw new Error('Invalid email or password');
                }
            } catch (error) {
                throw new Error('Error logging in');
            }
        },

        addEntry: async (_, { date, location, buyIn, cashOut, hours, stake, gameType }) => {


            try {
                const newEntry = new Entry({
                    date,
                    location,
                    buyIn,
                    cashOut,
                    hours,
                    stake,
                    gameType
                });

                const savedEntry = await newEntry.save();
                return savedEntry;
            } catch (err) {
                throw new Error(err);
            }
        },
    },
};

module.exports = resolvers

