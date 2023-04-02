
const express = require('express')
const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(4000, () => {
    console.log("listening on port 4000")
})