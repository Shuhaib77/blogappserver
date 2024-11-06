import express from "express";
import { addpost,  allpostss,  getuserposts } from "../controllerss/postControler.js";
import uplodimg from "../middleware/imageMiddleware.js";


const postRoute=express.Router()

postRoute.post("/posted/:id",uplodimg,addpost)
postRoute.get("/posted/all/:id",uplodimg,getuserposts)
postRoute.get("/posted/all",uplodimg,allpostss)

export default postRoute