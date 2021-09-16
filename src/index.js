const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        user: String!
        active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        author: User!
    }

    type Query {
        hello: String
        users: [User!]!
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world',
        users: () => [
            { _id: String(Math.random()), name: 'Débora', email: 'debora@teste.com', active: true },
            { _id: String(Math.random()), name: 'Matheus', email: 'matheus@teste.com', active: false },
            { _id: String(Math.random()), name: 'Jose', email: 'jose@teste.com', active: true },
        ],
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({url}) => console.log(`Server started at ${url}`))