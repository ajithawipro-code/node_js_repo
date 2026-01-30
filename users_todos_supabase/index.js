import express from "express";
import dotenv from "dotenv";
import { UserRoute } from "./routes/users.route.js";
import { TodoRoute } from "./routes/todos.route.js";

const app=express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/users", UserRoute);
app.use("/todos", TodoRoute);


app.listen(PORT,()=>{
    console.log(` Server is running in PORT ${PORT}`);
});