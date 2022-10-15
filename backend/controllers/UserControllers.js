
const RegisterUser = (req,res) => {
    res.json({msg:"registe user"})
}
const LoginUser = (req,res) => {
    res.json({msg:"login user"})
}
const DataUser = (req,res) => {
    res.json({msg:"data user"})
}

module.exports = { RegisterUser,LoginUser,DataUser};
