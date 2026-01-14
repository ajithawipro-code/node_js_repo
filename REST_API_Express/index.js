import express from "express";
import fs from "fs";
import os from "os";
import dns from "dns";

const app=express();

app.get("/readfile",(req,res)=>{

    const data=fs.readFileSync("Data.txt","utf-8");

    res.send(data);

})

app.get("/systemdetails",(req,res)=>{

    const platform=os.platform();
    const total_memory=os.totalmem();
    const free_memory=os.freemem();
    const CPU_Model=os.cpus()[0].model;

res.json({

    System_Platform : platform,
    Total_Memory : `${total_memory}`,
    Free_Memory : `${free_memory}`,
    CPU_Model: CPU_Model
});

});

app.get("/getip",(req,res)=>{

    dns.lookup("masaischool.com",(err,address)=>{

        if(err)
        {
            console.log(err);
            return;
        }

        res.send({hostname: "masaischool.com",
                  ipAddress: `${address}`
        })


    })
});

app.get("/home",(req,res)=>{

    res.json({Response: "This is home page"});
});

app.get("/contactus",(req,res)=>{

    res.json({Message :"Contact us at contact@contact.com"});
    
});

app.get("/about", (req,res)=>{

    res.json({"Welcome Message": "Welcome to the About Page!"});
})


app.listen(4000,()=>{
    console.log("Server started...");
})