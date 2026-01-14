import fs from "fs";

fs.readFile("Data.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
        return;
    }

console.log("Data inside the text file", data);

});

