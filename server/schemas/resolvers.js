const Bankroll = require('../models/Bankroll')

const resolvers = {
    Query: {
        bankrolls: async (parent, args, { models }) => {
            return models.Bankroll.find();
        },
    },

    Mutation: {
        addBankroll: async (parent, { name, amount }, { models }) => {
            const bankroll = new models.Bankroll({
                name,
                amount,
            });

            await bankroll.save();
            return bankroll;
        },
    },
};

module.exports = resolvers 