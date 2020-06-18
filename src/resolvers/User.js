
function __resolveReference(user, context) {
	console.log(user);
	return context.prisma.user({ id: user.id });
}

// ME helper??


// function user(parent, args, context){
//     return context.prisma.chats({ where: { user: parent.id } })
// }

// function friend(parent, args, context){
//     return context.prisma.chats({ where: { friend: parent.id } })
// }

// function participants(_parent, args, context){
//     const res = context.prisma.chat({
//             id: _parent.id
//     }).participants()
//     console.log("participants Res", res)
//     return res
// }

// function loggedIn(parent, _args, context){
//     return context.prisma.chats({ 
//         where: { userId: parent.id}
//     })
// }

module.exports = {
    __resolveReference,
    // user,
    // friend,
    // participants,
    // loggedIn,
}