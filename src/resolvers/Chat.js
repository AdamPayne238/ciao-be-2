// function __resolveReference(reference, context) {
//     const res = context.prisma.chat({ id: reference.id })
// }

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

module.exports = {
    // __resolveReference,
    // user,
    // friend,
    participants,
}