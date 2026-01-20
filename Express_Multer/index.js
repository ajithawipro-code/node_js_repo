import express from "express";
import { UserRouter } from "./routes/user.routes.js";

const app = express();

app.use("/users", UserRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
