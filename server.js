const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = process.env.MONGODB;

const Product = require('./server/models/Product');
const typeDefs = require('./server/graphql/typeDefs');
const resolvers = require('./server/graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 5000 });
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    });

    

