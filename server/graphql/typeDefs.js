const { gql } = require('apollo-server');

module.exports = gql`
    type Product {
        category: String!
        name: String!
        code: String!
    }
    input ProductInput {
        category: String!
        name: String!
        code: String!
    }
    type Query {
        getProducts: [Product]
    }
    type Mutation {
        createProduct(category: String!, name: String!, code: String!): Product!
    }
`;