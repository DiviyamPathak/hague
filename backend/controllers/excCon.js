const excr = require('../dbModel.js');
const thencat = require('express-async-handler');

const getHandler = thencat(async (req,res)=>{
    const excer = excr.find();

    res.status(200).json(excer)
})


const postHandler = thencat(async (req,res)=>{
    

})

const putHandler = thencat(async (req,res)=>{

})

const deleteHandler = thencat(async (req,res)=>{

})

export default{getHandler ,postHandler, putHandler,deleteHandler}
