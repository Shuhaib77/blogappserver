import express from "express";
import { addpost,  allpostss,  deletepost,  getuserposts } from "../controllerss/postControler.js";
import uplodimg from "../middleware/imageMiddleware.js";
import { savepost, viewsave } from "../controllerss/saveController.js";


const postRoute=express.Router()

postRoute.post("/posted/:id",uplodimg,addpost)
postRoute.get("/posted/all/:id",uplodimg,getuserposts)
postRoute.get("/posted/all",uplodimg,allpostss)
postRoute.delete('/posted/delete/:pid/:uid',deletepost)


//wishlist
postRoute.post('/posted/save/:pid/:uid',savepost)
postRoute.get('/posted/save/:id',viewsave)


export default postRoute