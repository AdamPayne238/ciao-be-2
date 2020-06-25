
function __resolveReference(user, context) {
	// console.log(user);
	return context.prisma.user({ id: user.id });
}

function chats(_parent, args, context){
    const res = context.prisma.user({
        id: _parent.id
    }).chats()
    // console.log("chats res", res)
    return res
}

function messages(_parent, args, context){
    const res = context.prisma.user({
        id: _parent.id
    }).messages()
    console.log("messages res", res)
    return res
}

module.exports = {
    __resolveReference,
    chats,
    messages,
}