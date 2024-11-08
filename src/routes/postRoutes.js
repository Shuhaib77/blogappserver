import express from "express";
import { addpost,  allpostss,  deletepost,  getuserposts } from "../controllerss/postControler.js";
import uplodimg from "../middleware/imageMiddleware.js";
import { savepost, viewsave } from "../controllerss/saveController.js";
import { trycatchmidle } from "../utils/tryCatcherrors.js";


const postRoute=express.Router()

postRoute.post("/posted/:id",uplodimg, trycatchmidle(addpost) )
postRoute.get("/posted/all/:id",uplodimg,trycatchmidle(getuserposts))
postRoute.get("/posted/all",uplodimg, trycatchmidle( allpostss))
postRoute.delete('/posted/delete/:pid/:uid', trycatchmidle(deletepost) )


//wishlist
postRoute.post('/posted/save/:pid/:uid',trycatchmidle(savepost) )
postRoute.get('/posted/save/:id',trycatchmidle(viewsave) )


export default postRoute