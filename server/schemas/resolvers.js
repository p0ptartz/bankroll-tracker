const Entry = require('../models/Entry')

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
        addEntry: async (_, { entryInput }) => {
            const { date, location, buyIn, cashOut, hours, stake } = entryInput;

            try {
                const newEntry = new Entry({
                    date,
                    location,
                    buyIn,
                    cashOut,
                    hours,
                    stake,
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

