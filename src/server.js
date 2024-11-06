

import express from 'express';
import userRoute from './routes/userRoutes.js';
import { connectDB } from '../config/connect.js';
import cors from 'cors'
import path from 'path'
import postRoute from './routes/postRoutes.js';


const app= express();
app.use(cors())
app.use(express.json());

connectDB();
app.use("/api", userRoute);
app.use("/api", postRoute);


app.listen(5400,()=>{
    console.log("Running port 5400")
})