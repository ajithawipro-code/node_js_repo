import express from "express";
import { createUsers, deleteUsers, getUsers } from "../controllers/users.controller.js";
import { checkUserValidation } from "../middlewares/uservalidation.middleware.js";

export const UserRoute=express.Router();


UserRoute.post("/create",checkUserValidation, createUsers);

UserRoute.get("/allusers", getUsers);

UserRoute.delete("/deleteuser/:id", deleteUsers);
