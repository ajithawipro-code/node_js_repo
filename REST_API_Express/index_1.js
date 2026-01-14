import express from "express";

const app=express();

app.get("/home",(req,res)=>{

    res.json({Response: "This is home page"});
});

app.get("/contactus",(req,res)=>{

    res.json({Message :"Contact us at contact@contact.com"});
    
});

app.get("/about", (req,res)=>{

    res.json({"Welcome Message": "Welcome to the About Page!"});
})

app.listen(3000,()=>{

    console.log("Server is running on http://localhost:3000");
});