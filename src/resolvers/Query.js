const { getUserId } = require('../utils')

// TEST SERVER / INFO
function info(){
    return "Welcome to un named chat app"
}

// GET CHAT BY ID
function chat(parent, args, context){
    return context.prisma.chat({ id: args.id })
}

// GET ALL CHATS
function chats(parent, args, context){
    return context.prisma.chats()
}

// GET MESSAGE BY ID
function message(parent, args, context){
    return context.prisma.message({ id: args.id })
}


// GET ALL MESSAGES
function messages(parent, args, context){
    return context.prisma.messages()
}

module.exports = {
    info,
    chat,
    chats,
    message,
    messages,
}