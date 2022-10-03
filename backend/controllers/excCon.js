

const Excr = require('../dbModel.js');
const thencat = require('express-async-handler');

const getHandler = thencat(async (req,res)=>{
    const excer = await Excr.find();

    res.status(200).json(excer)
})


const postHandler = thencat(async (req,res)=>{
    if (!req.body ){
        res.status(400);
        throw new Error('please add all the fields required');
    }
    
    const newexcercise = await Excr.create({desc:  req.body.desc, title : req.body.title,tag : req.body.tag});
    res.send(200).json(newexcercise);

})

const putHandler = thencat(async (req,res)=>{
        console.log('puthandler');
})

const deleteHandler = thencat(async (req,res)=>{
    console.log('delhandler');
})

module.exports = {getHandler ,postHandler, putHandler,deleteHandler};
