import express from "express";
import dotenv from "dotenv";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { TodoRouter } from "./routes/todos.route.js";
import { UserRouter } from "./routes/users.route.js";
dotenv.config();

const app=express();
app.use(express.json());


const PORT=process.env.PORT || 8676;

app.use(loggerMiddleware);

app.use("/users", UserRouter);

app.use("/todos", TodoRouter)


app.listen(PORT,(req,res)=>{

    console.log(`Server is running on port ${PORT}`);

})
