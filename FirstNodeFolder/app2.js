import fs from "fs";

fs.writeFile("./data.txt","Hello Worlddddd",()=>{

    fs.writeFile("./Readme.md","## This is first line in Readme",()=>{

console.log("Readme file created");
fs.readFile("./data.txt","utf-8",(err,data)=>{

    console.log("Data inside text file", data);
    fs.appendFile("./data.txt","\n This is second line",()=>{

    console.log("appending second line");

    fs.unlink("./Readme.md",()=>{

         console.log("Readme deleted");

    });
   

});

});
    
});

});


// fs.unlink("./Readme.md");

// console.log("Readme deleted");