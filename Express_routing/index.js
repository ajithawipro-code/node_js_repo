import express from "express";
import { TodoRouter } from "./routes/todos.route.js";
import { UserRouter } from "./routes/users.route.js";
const app=express();
app.use(express.json());


app.use("/users", UserRouter);

app.use("/todos", TodoRouter)


app.listen(3000,(req,res)=>{

    console.log("Server is running on port 3000");

})
