import { supabase } from "../supabaseClient.js";

export const createTodo=async (req,res)=>{

    const {title, user_id} = req.body;
    const {data,error} = await supabase.from("todos_1")
                                       .insert([{title, user_id}])
                                       .select();
    if(error)
    {
        return res.status(500).json({error : error.message});
    }
    res.status(200).json({message: "new todo created", user: data});
};

export const getTodo=async (req,res)=>{

    const {userId} = req.params;
    const {data,error} = await supabase.from("todos_1")
                                       .select("*")
                                       .eq("user_id",userId);
    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    res.status(200).json({message: "Todos for the particular userId", user: data});
};


export const updateTodo=async(req,res)=>{

    const {todoId} = req.params;
    const {title, is_completed} = req.body;
    const {data,error} = await supabase.from("todos_1")
                                       .update({title,is_completed})
                                       .eq("id",todoId)
                                       .select();

    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    res.status(200).json({message: "updated User", user: data});
};

export const deleteTodo=async(req,res)=>{

    const {todoId} = req.params;
    const{data,error} = await supabase.from("todos_1")
                                      .delete()
                                      .eq("id",todoId)
                                      .select();

    if(error)
    {
        res.status(500).json({error: error.message});
    }

    res.status(200).json({message: "deleted user", user: data});

};