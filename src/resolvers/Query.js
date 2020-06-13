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




module.exports = {
    info,
    user,
    users,
    chat,
    chats,
    message,
    messages
}