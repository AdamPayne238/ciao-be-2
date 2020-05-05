
function chat_as_user(parent, args, context){
    return context.prisma.chats({ where: { user: parent.id } })
}

function chat_as_friend(parent, args, context){
    return context.prisma.chats({ where: { friend: parent.id } })
}

module.exports = {
    chat_as_user,
    chat_as_friend,
}