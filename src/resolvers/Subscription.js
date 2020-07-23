
// CHAT SUBSCRIPTION
function  newChatSubscribe(parent, args, context, info){
    return context.pubsub.asyncIterator("NEW_CHAT")
}

const newChat = {
    subscribe: newChatSubscribe,
    resolve: payload => {
        return payload
    },
}


// MESSAGE SUBSCRIPTION
function newMessageSubscribe(parent, args, context, info){
    return context.pubsub.asyncIterator("NEW_MESSAGE")
}

const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    newChat,
    newMessage,
}