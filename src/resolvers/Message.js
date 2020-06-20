function __resolveReference(message, context) {
	console.log(message);
	return context.prisma.message({ id: user.id });
}

// Current Error in Playground
// "context.prisma.message(...).message is not a function",
function user(_parent, args, context){
    const res = context.prisma.message({
        id: _parent.id
    }).message()
    console.log("message user res", res)
    return res
}

// _parent.id is the ID of the created message
// NOT the chatId associated with the creation of m
function chatId(_parent, args, context){
    const res = context.prisma.message({
        id: _parent.id
    }).chatId()
    console.log("chatId message res", res)
    console.log("parent id", _parent.id)
    return res
}


module.exports = {
    __resolveReference,
    chatId,
    user,
}