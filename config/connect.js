import mongoose from "mongoose"


export const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/uplod").then(()=>{
        console.log("conected" );
        
    }).catch((error)=>{
        console.log(error);
        
    })

}