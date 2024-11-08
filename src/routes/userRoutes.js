import express from "express";
import { getalluser, login, register } from "../controllerss/userControler.js";
import uplodimg from "../middleware/imageMiddleware.js";
import { trycatchmidle } from "../utils/tryCatcherrors.js";

const routes=express.Router()


routes.post("/register",uplodimg,register)
routes.post("/login",login)
routes.get("/allusers", trycatchmidle(getalluser) )

export default routes