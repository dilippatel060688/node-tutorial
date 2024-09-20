const mongoose=require('mongoose');

const usersSchema=mongoose.Schema(
    {
        first_name:{
            type:String,
            required:[true,"Please enter First Name"]
        },
        last_name:{
            type:String,
            required:[true,"Please enter Last Name"]
        },
        email:{
            type:String,
            required:[true,"Please enter email"]
        },
        password:{
            type:String,
            required:[true,"Please enter password"]
        }
    }
)

const Users=mongoose.model("users",usersSchema);
module.exports=Users;