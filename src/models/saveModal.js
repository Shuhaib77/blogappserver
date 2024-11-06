import mongoose from "mongoose"


const saveSchema=mongoose.Schema({
    postId:{
        type:mongoose.Schema.ObjectId,
        ref:"Post",
        require:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        require:true
    }
})

const Save=mongoose.model("Save",saveSchema)

export default Save