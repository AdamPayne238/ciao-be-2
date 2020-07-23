const { GraphQLServer, PubSub } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')

const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')

const User = require('./resolvers/User')
const Chat = require('./resolvers/Chat')
const Message = require('./resolvers/Message')

// Subscriptions
const pubsub = new PubSub()

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Chat,
    Message,
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: request => {
        return {
            ...request, 
            prisma,
            pubsub
         }
    },
  })

module.exports = server