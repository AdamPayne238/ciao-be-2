const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET

function getUserId(context){
    const Authorization = context.request.get('Authorization')
    if(Authorization){
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, APP_SECRET)

        return userId
    }
    throw new Error('Not authorized for that action')
}

module.exports = {
    getUserId,
    APP_SECRET,
}
