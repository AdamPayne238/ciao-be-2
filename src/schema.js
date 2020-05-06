const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
}

type Chat {
    id: ID!
    isPending: Boolean!
    isAccepted: Boolean!
    isDenied: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    messages: Message!
    user: User!
    friend: User!
}

type Message {
    id: ID!
    createdAt: DateTime!
    text: String!
    user: User!
}

type Query {
    info: String!

    chat(id: String!): Chat!
    chats(
        id: ID!
        isPending: Boolean!
        isAccepted: Boolean!
        isDenied: Boolean!
        createdAt: DateTime!
        updatedAt: DateTime!
        messages: String!
    ): Chat!

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
        friend: String!
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