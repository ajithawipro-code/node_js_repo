import fs from "fs";

export const loggerMiddleware=((req,res,next)=>{

    let data= `\n Method:${req.method}  | URL: ${req.url} | Time : ${new Date()}`;
    fs.appendFileSync("./logs.txt", data);
    next();
});