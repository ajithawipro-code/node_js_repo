import express from "express";
import fs from "fs";

export const TodoRouter=express.Router();

function readData(){

    const data = fs.readFileSync("./db.json","utf-8")
    return JSON.parse(data);
}

function writeData(data){

    fs.writeFileSync("./db.json",JSON.stringify(data,null,2));

}

TodoRouter.post("/todos/add",(req,res)=>{

    const data=readData();
    console.log(data);

    let newId=1;
    if(data.todos.length>0)
    {
        const lastTodo=data.todos[data.todos.length-1];
        newId=lastTodo.todoId+1;
    }

    const newTodo={
        todoId: newId,
        title: req.body.title
    }

    data.todos.push(newTodo);
    writeData(data);
    res.status(200).json(newTodo);

});

TodoRouter.get("/todos",(req,res)=>{

    const data=readData();

    res.status(200).json(data.todos);
});

TodoRouter.get("/todos/:todoId",(req,res)=>{

    const data=readData();
    const todoId=Number(req.params.todoId);

    const todo=data.todos.find(el=>el.todoId===todoId);

    res.status(200).json(todo)
});

TodoRouter.put("/todos/update/:todoId",(req,res)=>{

    const data=readData();
    const todoId=Number(req.params.todoId);

    const todo=data.todos.find(el=>el.todoId===todoId);

     todo.title=req.body.title;

     writeData(data);

     res.status(200).json(data.todos);


})

TodoRouter.delete("/todos/delete/:todoId",(req,res)=>{

    const data=readData();
    console.log(data);

    const todoId=Number(req.params.todoId);

    let originalLength=data.todos.length;
    console.log(originalLength)

    data.todos=data.todos.filter(el=>el.todoId!==todoId);

    if(originalLength==data.todos.length)
    {
        return res.status(404).json("No record found");
    }

    writeData(data);

    res.status(200).json("Record deleted");


});