import express from "express";
import { getalluser, login, register } from "../controllerss/userControler.js";
import uplodimg from "../middleware/imageMiddleware.js";

const routes=express.Router()


routes.post("/register",uplodimg,register)
routes.post("/login",login)
routes.get("/allusers",getalluser)

export default routes