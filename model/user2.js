const mongoose = require('mongoose')

const happySchema = new mongoose.Schema({
    
    firstname: {
        type: String,
     
        
    },

    lastname:{
        type:String,
        
    },
    gender:{
        type:String,
       
    },
    phone:{
         type: String,
       
    },
    Age:{
        type:String
    },
    address:{
   type:String
    }

   
})



module.exports = mongoose.model("Happy", happySchema);
