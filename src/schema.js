const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    chats: [Chat!]
}

type Chat {
    id: ID!
    participants: [User!]
    createdAt: DateTime!
    updatedAt: DateTime!
    messages: Message
}

type Message {
    id: ID!
    createdAt: DateTime!
    text: String!
    user: User!
}

type Query {
    info: String!

    user(id: String!): User!
    users: [User!]!

    chat(id: String!): Chat!
    chats: [Chat!]!

    message(id: String!): Message!
    messages(
        id: ID!
        createdAt: DateTime!
        text: String!
        user: String!
    ): Message!

}

type Mutation {

    createChat(
        participants: String!
    ): Chat!

    deleteChat(
        id: String!
    ): Chat!

    createMessage(
        id: ID!
        createdAt: DateTime!
        text: String!
        user: String!
    ): Message!

    deleteMessage(
        id: String!
    ): Chat!

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