const users = require('../dbUser.js');
const thencat = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const RegisterUser = thencat(async (req,res) => {
    if (!req.body.username || !req.body.email || !req.body.pass){
        res.status(400);
        throw new Error('all fiwlds are mandotary');
    }
    const usrobj = await users.findOne({Email:req.body.email});
    if (usrobj){
        res.status('400');
        throw new Error('already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedppswd = await bcrypt.hash(req.body.pass,salt);
    const usri = await users.create({UserName :req.body.username, Email:req.body.email, Password:hashedppswd })
    res.status(200).json(usri);

})

const LoginUser = thencat(async (req,res) => {
    const email= req.body.email;
    const passw= req.body.pass;
    const userlogin = await users.findOne({email})

    const gentok = (id)=>{return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})}

    if (userlogin && bcrypt.compare(passw, userlogin.Password )){
        res.json(
            {
                _id:userlogin._id,
                Username:userlogin.UserName,
                Email:userlogin.Email,
                token:gentok(userlogin._id)
            }
        )
    }
    else{
        res.status(400);
        throw new Error('invalid credentials');
    }
})

const DataUser = (req,res) => {
    res.status(200).json(req.user)
}

module.exports = { RegisterUser,LoginUser,DataUser};
