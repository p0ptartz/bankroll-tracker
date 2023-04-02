const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express'); // change import statement
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./server/config/connection');
const { typeDefs, resolvers } = require('./server/schemas');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // context code goes here
    },
});

async function startServer() {
    await server.start(); // wait for the server to start
    server.applyMiddleware({ app }); // then apply middleware
}

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
