// function __resolveReference(reference, context) {
//     const res = context.prisma.chat({ id: reference.id })
// }

function __resolveReference(chat, context) {
	console.log(chat);
	return context.prisma.chat({ id: user.id });
}

// function user(chat) {
//     return { __typename: 'User', id: chat.user }
// }

// function friend(chat) {
//     return { __typename: 'User', id: chat.friend };
// }

function participants(_parent, args, context){
    const res = context.prisma.chat({
            id: _parent.id
    }).participants()
    console.log("participants Res", res)
    return res
}

// function loggedInUser(_parent, args, context){
//     const res = context.prisma.chats({
//         id: parent.id
//     }).loggedInUser()
//     console.log("logged in user Res", loggedInUser)
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
    participants,
    // loggedInUser
 
}