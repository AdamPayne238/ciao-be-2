
// chatId
function chatId(_parent, args, context){
    const res = context.prisma.message({
        id: _parent.id
    }).chatId()
    console.log("chatId res", res)
    return res
}

// user
function user(_parent, args, context){
    const res = context.prisma.message({
        id: _parent.id
    }).user()
    return res
}

module.exports = {
    chatId,
    user,
}