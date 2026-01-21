import { readData,writeData } from "../models/todos.model.js";

export const addTodos= ((req,res)=>{

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
        title: req.body.title,
        status:false
    }

    data.todos.push(newTodo);
    writeData(data);
    res.status(200).json(newTodo);

});

export const getTodos=((req,res)=>{

    const data=readData();

    res.status(200).json(data.todos);
});

export const getTodosById=((req,res)=>{

    const data=readData();
    const todoId=Number(req.params.todoId);

    const todo=data.todos.find(el=>el.todoId===todoId);
    if (!todo) {
  return res.status(404).json({ error: "Todo not found" });
}

    res.status(200).json(todo)
});

export const updateTodos=((req,res)=>{

    const data=readData();
    const todoId=Number(req.params.todoId);

    const todo=data.todos.find(el=>el.todoId===todoId);
    if (!todo) {
  return res.status(404).json({ error: "Todo not found" });
}

     todo.title=req.body.title;

     writeData(data);

     res.status(200).json(data.todos);


});

export const deleteTodos=((req,res)=>{

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





