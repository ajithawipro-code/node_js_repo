import express from "express";
import { signup , login} from "../controllers/auth.controller.js";

export const userRoute=express.Router();

userRoute.post("/signup", signup);

userRoute.post("/login", login);