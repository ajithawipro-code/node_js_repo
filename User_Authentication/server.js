import express from "express";
import { checkDB } from "./utils/dbHealthCheck.js";
import { userRoute } from "./routes/auth.route.js";
import { todoRoute } from "./routes/todo.route.js";


const app=express();
app.use(express.json());

app.use("/users",userRoute);
app.use("/todos", todoRoute);

const PORT=process.env.PORT;

checkDB();
app.listen(PORT, ()=>{
    console.log(`Server is running in port ${PORT}`);
});