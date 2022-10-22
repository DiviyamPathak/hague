const mongoose = require('mongoose');

const excSchema =  mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users',
          },
        title:{type : String, required : [true] },
        desc:{type : String, required : [true]},
        tag:{type : String, required : [true]}
    }
    
)

module.exports = mongoose.model('excr',excSchema);