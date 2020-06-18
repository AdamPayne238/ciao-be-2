// OLD VERSION
// function __resolveReference(reference, context) {
//     const res = context.prisma.chat({ id: reference.id })
// }

function __resolveReference(chat, context) {
	console.log(chat);
	return context.prisma.chat({ id: user.id });
}

function participants(_parent, args, context){
    const res = context.prisma.chat({
            id: _parent.id
    }).participants()
    console.log("participants Res", res)
    return res
}

module.exports = {
    __resolveReference,
    participants,
}