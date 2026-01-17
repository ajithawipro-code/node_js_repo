import express from "express";
import fs from "fs";

export const UserRouter = express.Router();

function readData(){

    const data = fs.readFileSync("./db.json","utf-8")
    return JSON.parse(data);
}

function writeData(data){

    fs.writeFileSync("./db.json",JSON.stringify(data,null,2));

}


UserRouter.post("/users/add",(req,res)=>{

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


UserRouter.get("/users",(req,res)=>{

    const data=readData();
    res.status(200).json(data.users);
});


UserRouter.get("/users/:userId",(req,res)=>{

    const data=readData();     
    
    const filteredData=data.users.find(el=>el.userId==req.params.userId);
    console.log(filteredData);

    res.status(200).json(filteredData);

});

UserRouter.put("/users/update/:userId",(req,res)=>{

    console.log("PUT route hit");

    const data=readData();

    const userId= Number(req.params.userId);

    const user=data.users.find(el=>el.userId===userId);

    user.title=req.body.title;
    console.log(user);
    writeData(data)

    res.status(201).json(user)
})

UserRouter.delete("/users/delete/:userId",(req,res)=>{
   const data=readData();
   const userId=Number(req.params.userId);

   data.users=data.users.filter(el=>el.userId!==userId);

   writeData(data);
   
   res.status(200).json(data);

});