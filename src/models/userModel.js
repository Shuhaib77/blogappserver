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
    postId:[{
        type:mongoose.Schema.ObjectId,
        ref:"Post",
        require:true
    }],




})
 
const User=mongoose.model('User',userSchema)
export default User