function __resolveReference(reference, context) {
    const res = context.prisma.chat({ id: reference.id })
}

function user(chat) {
    return { __typename: 'User', id: chat.user }
}

function friend(chat) {
    return { __typename: 'User', id: chat.friend };
}

module.exports = {
    __resolveReference,
    user,
    friend,
}