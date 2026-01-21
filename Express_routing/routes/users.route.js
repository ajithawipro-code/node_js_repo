import express from "express";

import {readData,writeData} from "../models/todos.model.js";



export const UserRouter = express.Router();


UserRouter.post("/add",(req,res)=>{

    const data=readData();
     let newId =1;

    if(data.users.length>0)
    {
       
      const lastId=data.users[data.users.length-1];
      newId=lastId.userId+1;
    }

    const newUser={
        userId: newId,
        title: req.body.title,
        status :false
    }
     console.log("NewUser--->",newUser);
     //console.log("Request Object--->",req);
    data.users.push(newUser);
    console.log(newUser);
    writeData(data);
    res.status(200).json(newUser);
});


UserRouter.get("/",(req,res)=>{

    const data=readData();
    res.status(200).json(data.users);
});


UserRouter.get("/:userId",(req,res)=>{

    const data=readData();     
    
    const filteredData=data.users.find(el=>el.userId==req.params.userId);
    console.log(filteredData);

    res.status(200).json(filteredData);

});

UserRouter.put("/update/:userId",(req,res)=>{

    console.log("PUT route hit");

    const data=readData();

    const userId= Number(req.params.userId);

    const user=data.users.find(el=>el.userId===userId);

    user.title=req.body.title;
    console.log(user);
    writeData(data)

    res.status(201).json(user)
})

UserRouter.delete("/delete/:userId",(req,res)=>{
   const data=readData();
   const userId=Number(req.params.userId);

   data.users=data.users.filter(el=>el.userId!==userId);

   writeData(data);
   
   res.status(200).json(data);

});