
import mongoose from "mongoose";


const postSchema=mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    userId:[{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        require:true

    }]

})

const Post=mongoose.model("Post",postSchema)
export default Post