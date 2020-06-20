const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')

const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const User = require('./resolvers/User')
const Chat = require('./resolvers/Chat')
const Message = require('./resolvers/Message')

const resolvers = {
    Query,
    Mutation,
    User,
    Chat,
    Message,
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: request => {
        return {...request, prisma }
    },
  })

module.exports = server