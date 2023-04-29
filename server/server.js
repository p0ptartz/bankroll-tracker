const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const db = require('../server/config/connection');
const { typeDefs, resolvers } = require('./schemas');


const PORT = process.env.PORT || 3022;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const userId = req.headers["user-id"];
        return { userId }
    },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
});


// create a new instance of an Apollo server

async function startServer(typeDefs, resolvers) {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}

startServer(typeDefs, resolvers);






