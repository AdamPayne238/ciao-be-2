const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
}

type Query {
    info: String!
}

type Mutation {

    register(
        first_name: String!
        last_name: String!
        email: String!
        password: String!
    ): AuthPayload

    login(
        email: String!
        password: String!
    ): AuthPayload
}

type AuthPayload {
  token: String
  user: User
}


`

module.exports = typeDefs