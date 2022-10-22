const jwt = require('jsonwebtoken')
const thencat = require('express-async-handler')
const users = require('./dbUser')

const protec = thencat(async (req,res,next) =>{
    let token 
    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ){
            try{
                token = req.headers.authorization.split(" ")[1]
                const decoded = jwt.verify(token,process.env.JWT_SECRET)
                req.user = await users.findById(decoded.id).select('-password')
                next()
            }
            catch (error) {
                console.log(error)
                res.status(400)
                throw new Error('not authorised')
            }
        }
    if (!token){
        res.status(400)
        throw new Error(" pls login")
    }

})
module.exports = { protec }