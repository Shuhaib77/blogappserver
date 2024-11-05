import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },



})
 
const User=mongoose.model('users',userSchema)
export default User