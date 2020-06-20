function __resolveReference(chat, context) {
	// console.log(chat);
	return context.prisma.chat({ id: user.id });
}

function participants(_parent, args, context){
    const res = context.prisma.chat({
            id: _parent.id
    }).participants()
    // console.log("participants Res", res)
    return res
}

function messages(_parent, args, context){
    const res = context.prisma.chat({
        id: _parent.id
    }).messages()
    // console.log("messages res", res)
    return res
}

module.exports = {
    __resolveReference,
    participants,
    messages,
}