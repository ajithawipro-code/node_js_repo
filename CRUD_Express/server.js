import express from "express";
import fs from "fs";

const app=express();
app.use(express.json());

function readData(){
    
    const data=fs.readFileSync("db.json","utf-8");
    return JSON.parse(data);
}


function writeData(data){
    fs.writeFileSync("db.json",JSON.stringify(data,null,2));
}


app.post("/students",(req,res)=>{

    const data=readData();
    const {name, course, year} = req.body;

    if(!name || !course || !year)
    {
        return res.status(400).json("All fields required");
        
    }

    let newID=1;
    if(data.students.length>0)
    {
        const lastStudent=data.students[data.students.length-1];
        newID=lastStudent.id+1;
    }

    const newStudent={
        id: newID,
        name,
        course,
        year
     }

     data.students.push(newStudent);
     writeData(data);
     res.status(201).json(newStudent);


    // const data=readData();
    // data.students.push(req.body);
    // writeData(data);
    // res.send(data);
});

app.get("/students",(req,res)=>{

    const data= readData();
    res.send(data.students);

})

app.get("/students/:id",(req,res)=>{

    const data=readData();

    const {id} = req.params;

    const student=data.students.find(s=>s.id===Number(id));

    if(!student)
    {
        return res.status(404).json("Student record not found");
    }

    res.status(200).json(student);

});

app.put("/students",(req,res)=>{

    const data=readData();

    const {id, name,course,year} = req.body;

    const student=data.students.find(u=>u.id===Number(id))

    if(!student)
    {
       return res.status(404).json("No record found");
    }

    student.name=name;
    student.course=course;
    student.year=year;
    writeData(data);

    res.status(200).json(student);



});

app.put("/students/:id",(req,res)=>{

    const data=readData();

    const {id} = req.params;

    const student=data.students.find(s=>s.id===Number(id))
    if(!student)
    {
        return res.status(404).json("Not found record");
    }

    student.name=req.body.name;
    student.course=req.body.course;
    student.year=req.body.year;

    writeData(data);

    res.status(200).json(student);


});

app.delete("/students/:id",(req,res)=>{

    const data=readData();

    const {id} = req.params;

    const originalLength= data.students.length;

    data.students =data.students.filter(s=>s.id!==Number(id));
  
    if(data.students.length===originalLength)
    {
        return res.status(404).json("Record not found");
    }

    writeData(data);

    res.status(200).json(data.students);

});

app.listen(8080,()=>{

    console.log("Server up and running in port 8080");


});