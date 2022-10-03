const mongoose = require('mongoose');

const excSchema =  mongoose.Schema(
    {
        title:{text:String,required:true },
        desc:{text:String,required:true},
        tag:{text:String,required:true}
    }
    
)

module.exports = mongoose.model('excercises',excSchema);