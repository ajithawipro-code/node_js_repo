import { supabase } from "../config/supabase.config.js";

export const createTodo=async(req,res)=>{

    const {title, completed} = req.body;

    const userId = req.user.id;

    console.log(userId);

    const{data,error}= await supabase.from("product_auth")
                                     .insert([{title, completed, user_id : userId}])
                                    .select();
    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    return res.status(201).json({message:"Todo created", data});
};


export const getTodos=async(req,res)=>{

    const userId = req.user.id;

    const{data,error} = await supabase.from("product_auth")
                                      .select("*")
                                      .eq("user_id",userId);
    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    if(!data || data.length===0)
    {
        return res.status(404).json({message: "Todos not found for the user"});
    }

    return res.status(200).json({message: "all todos", data});                                      

}


export const updateTodo=async(req,res)=>{

    const{id:todoId} = req.params;

    const userId = req.user.id;

    const{title , completed} = req.body;

    if(!userId)
    {
          return res.status(404).json({error})
    }
    
        const{data,error} = await supabase.from("product_auth")
                                      .update({title, completed})
                                      .eq("id",todoId)
                                      .eq("user_id",userId)
                                      .select();
    if(error)
    {
        return res.status(500).json({error:error.message});
    }
    if(!data)
    {
        return res.status(404).json({message: "todo not found"});
    }

    return res.status(200).json({message:"Todo updated successfully", data});


}

export const deleteTodo=async(req,res)=>{

    const{id:todoId} = req.params;

    const userId = req.user.id;

    if(!userId)
    {
          return res.status(404).json({error})
    }
    
        const{data,error} = await supabase.from("product_auth")
                                      .delete()
                                      .eq("id",todoId)
                                      .eq("user_id",userId)
                                      .select();
    if(error)
    {
        return res.status(500).json({error:error.message});
    }
    if(!data)
    {
        return res.status(404).json({message: "todo not found"});
    }

    return res.status(200).json({message:"Todo deleted successfully", data});




}