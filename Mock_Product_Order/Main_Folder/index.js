import express from "express";
import { OrderRoute } from "./routes/orders.routes.js";

const app=express();
app.use(express.json());

app.use("/", OrderRoute);

app.listen(4000,()=>{

    console.log("Server running in port 4000");

});

