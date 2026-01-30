import express from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todos.controller.js";

export const TodoRoute=express.Router();

TodoRoute.post("/add-todo", createTodo);

TodoRoute.get("/get-my-todo/:userId", getTodo);

TodoRoute.patch("/update-todo/:todoId", updateTodo);

TodoRoute.delete("/delete-todo/:todoId", deleteTodo);