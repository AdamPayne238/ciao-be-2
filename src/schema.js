const { gql } = require('apollo-server')

const typeDefs = gql`

scalar DateTime

type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    bio: String
    status: String
    github: String
    linkedin: String
    twitter: String
    createdAt: DateTime!
    chats: [Chat!]
    messages: [Message!]
    email_visibility: Boolean
}

type Chat {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    active: Boolean!
    participants: [User!]
    messages: [Message!]
}

type Message {
    id: ID!
    text: String!
    createdAt: DateTime!
    chatId: Chat!
    user: User!
}

type Subscription {
    newChat: Chat
    newMessage: Message
}

type Query {
    info: String!

    user(id: String!): User!
    users: [User!]!

    chat(id: String!): Chat!
    chats: [Chat!]!

    message(id: String!): Message!
    messages: [Message!]

    getUserChats: Chat!
    me: User!
    selectedChat: Chat!
    testThis: User!

}

type Mutation {

    updateUser(
        id: String
        bio: String
        status: String
        github: String
        linkedin: String
        twitter: String
    ): User!

    createChat(
        participants: String!
    ): Chat!

    updateChat(
        id: String
        active: Boolean
    ): Chat!

    deleteChat(
        id: String!
    ): Chat!

    createMessage(
        chatId: String!
        text: String!
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