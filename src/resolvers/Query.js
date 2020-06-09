const { getUserId } = require('../utils')

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
function chat(_parent, args, context){
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



// FRIEND //

// REQUESTED CHAT FRIEND NOTIFICATION
function requestedChatFriend(_parent, args, context){
    const userId = getUserId(context)
    const reqArgs = {
        where: {
            AND: [{ friend: userId }, { isPending: true }, { isAccepted: false }, { isDenied: false}]
        }
    }
    return context.prisma.chats(reqArgs)
}

// ACCEPTED CHAT FRIEND NOTIFICATION
function acceptedChatFriend(_parent, args, context){
    const userId = getUserId(context)
    const reqArgs = {
        where: {
            AND: [{ friend: userId }, { isPending: false }, { isAccepted: true }, { isDenied: false}]
        }
    }
    return context.prisma.chats(reqArgs)
}

//DENIED CHAT FRIEND NOTIFICATION
function deniedChatFriend(_parent, args, context){
    const userId = getUserId(context)
    const reqArgs = {
        where: {
            AND: [{ friend: userId }, { isPending: false }, { isAccepted: false }, { isDenied: true}]
        }
    }
    return context.prisma.chats(reqArgs)
}



// USER //

// REQUESTED CHAT USER NOTIFICATION
function requestedChatUser(_parent, args, context){
    const userId = getUserId(context)
    const reqArgs = {
        where: {
            AND: [{ user: userId }, { isPending: true }, { isAccepted: false }, { isDenied: false}]
        }
    }
    return context.prisma.chats(reqArgs)
}

// ACCEPTED CHAT USER NOTIFCATION
function acceptedChatUser(_parent, args, context){
    const userId = getUserId(context)
    const reqArgs = {
        where: {
            AND: [{ user: userId }, { isPending: false }, { isAccepted: true }, { isDenied: false}]
        }
    }
    return context.prisma.chats(reqArgs)
}

// DENIED CHAT USER NOTIFICATION
function deniedChatUser(_parent, args, context){
    const userId = getUserId(context)
    const reqArgs = {
        where: {
            AND: [{ user: userId }, { isPending: false }, { isAccepted: false }, { isDenied: true}]
        }
    }
    return context.prisma.chats(reqArgs)
}



module.exports = {
    info,
    user,
    users,
    chat,
    chats,
    message,
    messages,
    requestedChatFriend,
    acceptedChatFriend,
    deniedChatFriend,
    requestedChatUser,
    acceptedChatUser,
    deniedChatUser
}