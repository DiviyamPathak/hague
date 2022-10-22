const Excr = require('../dbModel.js');
const users = require('../dbUser')
const thencat = require('express-async-handler');

const getHandler = thencat(async (req,res)=>{
    const excer = await Excr.find({user: req.user.id});

    res.status(200).json(excer)
})


const postHandler = thencat(async (req,res)=>{
    if (!req.body ){
        res.status(400);
        throw new Error('please add all the fields required');
    }
    
    const newexcercise = await Excr.create({user:req.user.id ,desc:  req.body.desc, title : req.body.title,tag : req.body.tag});
    res.status(200).json(newexcercise);

})

const putHandler = thencat(async (req,res)=>{
       const excercise = await Excr.findById(req.params.id)

       if (!excercise){
           res.status(400);
           throw new Error('not found with that id');
       }
       if (req.user.id !== excercise.user.toString()){
           res.status(400)
           throw new Error('user not valid')
       }

       const upexcercise = await Excr.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.status(200).json(upexcercise);
})

const deleteHandler = thencat(async (req,res)=>{
    const excercisestodel = await Excr.findById(req.params.id);
    if (!excercisestodel){
        res.status(400)
        throw new Error('not found with that id del');
    } 

    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
      }
      
    if (req.user.id !== excercise.user.toString()){
        res.status(400)
        throw new Error('user not valid')
    }

    
    await excercisestodel.remove()

})

module.exports = {getHandler ,postHandler, putHandler,deleteHandler};
