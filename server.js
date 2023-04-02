
const express = require('express')
const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()
const db = require('./server/config/connection')

const PORT = process.env.PORT || 3001;
const app = express()


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

