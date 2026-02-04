import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./supabaseClient.js";
import { signupRoute } from "./signup.route.js";
dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use("/users",signupRoute);


connectDB();

app.listen(PORT,()=>{

    console.log(`Server started....${PORT}`);
})