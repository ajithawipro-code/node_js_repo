import express from "express";
import dotenv from "dotenv";
import { UserRoute } from "./routes/users.route.js";

dotenv.config();
const app=express();
app.use(express.json());

const PORT=process.env.PORT;

app.use("/users", UserRoute);


app.listen(PORT, ()=>{
    console.log(`Server started on PORT:${PORT}`);
});