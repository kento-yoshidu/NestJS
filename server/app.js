const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const app = express();

mongoose.connect('mongodb://localhost/graphqlTest', {useNewUrlParser: true})

mongoose.connection.once('open', () => {
  console.log('db connect')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Server is running on 4000')
})