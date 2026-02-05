import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todo.controller.js";

export const todoRoute=express.Router();

todoRoute.post("/create", authenticate, createTodo);

todoRoute.get("/", authenticate, getTodos);

todoRoute.put("/:id", authenticate, updateTodo);

todoRoute.delete("/:id", authenticate, deleteTodo);