import express from "express";
import { getUsers, createUsers, updateUsers, deleteUsers, getUsersById } from "../controllers/users.controller.js";
import { checkValidation } from "../middlewares/users.middleware.js";

export const UserRoute=express.Router();

UserRoute.get("/allusers", getUsers);

UserRoute.get("/user/:id", getUsersById);

UserRoute.post("/create",checkValidation, createUsers);

UserRoute.patch("/update/:id", updateUsers);

UserRoute.delete("/delete/:id", deleteUsers);

