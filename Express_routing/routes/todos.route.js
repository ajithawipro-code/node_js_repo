import express from "express";
import {addTodos, deleteTodos, getTodos , getTodosById, updateTodos} from "../controllers/todos.controller.js";
import { checkIncomingData } from "../middlewares/todos.middleware.js";
import { limiter } from "../middlewares/ratelimiter.middleware.js";

export const TodoRouter=express.Router();



TodoRouter.post("/add",checkIncomingData, addTodos);

TodoRouter.get("/", limiter, getTodos);

TodoRouter.get("/:todoId", getTodosById);

TodoRouter.put("/update/:todoId", updateTodos)

TodoRouter.delete("/delete/:todoId",deleteTodos);