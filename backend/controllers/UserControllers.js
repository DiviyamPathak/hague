const users = require('../dbUser.js');
const thencat = require('express-async-handler');
const bcrypt = require('bcryptjs')

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

const LoginUser = (req,res) => {
    res.json({msg:"login user"})
}
const DataUser = (req,res) => {
    res.json({msg:"data user"})
}

module.exports = { RegisterUser,LoginUser,DataUser};
