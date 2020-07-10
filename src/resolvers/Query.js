
// ADD THIS FOR AUTH GATE on QUERIES
const { getUserId } = require('../utils')
const { prisma } = require('../../prisma/generated/prisma-client')

// TEST SERVER / INFO
function info(){
    return "Welcome to Ciao!"
}

// GET USER BY ID
function user(_parent, args, context){
    return context.prisma.user({ id: args.id })
}

// GET ALL USERS
function users(_parent, args, context){
    return context.prisma.users()
}

// GET CHAT BY ID
function chat(_parent, args, context, info){
    return context.prisma.chat({ id: args.id })
}

// GET ALL CHATS
function chats(_parent, args, context){
    return context.prisma.chats()
}

// GET MESSAGE BY ID
function message(_parent, args, context){
    return context.prisma.message({ id: args.id })
}

// GET ALL MESSAGES
function messages(_parent, args, context){
    return context.prisma.messages()
}

// GET LOGGED IN USERS CHATS (_NOT WORKING_)
function getUserChats(_parent, args, context){

    const userId = getUserId(context)

    return context.prisma.chats({
        participants: {
            connect: [
             {id: args.participants},
              {id: userId}
            ]
          }
    })
}

// MY INFO
async function me(_parent, _args, context, info) {
    const res = await context.prisma.user({ id: getUserId(context)}, info) 
    return res
}

// GET MY SELECTED CHAT
// async function selectedChat(_parent, _args, context, info){
//     const userId = getUserId(context)
//     const opArgs = {
        
//             id: userId, active: true
        
//     }
//     const res = await context.prisma.chat( opArgs)
//     console.log("selectedChat res", res)
//     return res
// }

async function testThis(_parent, _args, context, info) {
   return await prisma.user.findMany({
        include: {
          posts: {
              active: true
          }
        },
      }).testThis()
}



module.exports = {
    info,
    user,
    users,
    chat,
    chats,
    message,
    messages,
    getUserChats,
    me,
    testThis,
    // selectedChat,
}