import express from "express";
import { OrderRoute } from "./routes/orders.routes.js";
import { AnalyticsRoute } from "./routes/analytics.routes.js";

const app=express();
app.use(express.json());

app.use("/", OrderRoute);
app.use("/analytics",AnalyticsRoute)

app.listen(4000,()=>{

    console.log("Server running in port 4000");

});

