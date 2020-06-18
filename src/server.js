const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')

const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Chat = require('./resolvers/Chat')
const User = require('./resolvers/User')

const resolvers = {
    Query,
    Mutation,
    Chat,
    User,
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: request => {
        return {...request, prisma }
    },
  })

module.exports = server