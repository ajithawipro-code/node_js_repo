import { supabase } from "../supabaseClient.js";
import bcrypt from "bcrypt";

export const  getUsers= async (req,res)=>{

    const {data, error} = await supabase.from("users_table").select("*");

    if(error)
    {
        return res.status(500).json({error:error.message});
    }

    res.status(200).json(data);
};

export const getUsersById = async(req,res)=>{

    const {id} = req.params;

    const {data,error} = await supabase.from("users_table").select("*").eq("id",id);

    if(error)
    {
        return res.status(500).json({error: error.message});
    }
      if(!data || data.length===0)
    {
        return res.status(404).json({message: "User not found"});
    }

    res.status(200).json({message:"User fetched data:", user: data[0]});

};

export const createUsers = async (req,res)=>{

    const {name,email,password,age,role} = req.body;

    if(!name || !email || !password || !age)
    {
        return res.status(400).json({message: "Empty fields not allowed"});
    }

    const hashedPassword=await bcrypt.hash(password, 10 );
    const {data,error} = await supabase
                         .from("users_table")
                         .insert([{name,email,password:hashedPassword,age, role}])
                         .select();

                         if(error)
                         {
                            return res.status(500).json({error: error.message});
                         }

    res.status(201).json({message: "User created", user:data[0]});

};

export const updateUsers = async (req,res)=>{

    const {id} = req.params;
    const {name, age, role} = req.body;

    const {data,error} = await supabase.from("users_table")
    .update({name, age , role}).eq("id",id).select();

    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    if(!data || data.length===0)
    {
        return res.status(404).json({message: "User not found"});
    }

    res.status(200).json({message: "User updated", user: data[0]});
};

export const deleteUsers = async(req,res)=>{

    const {id} = req.params;
    const {data, error} = await supabase.from("users_table").delete().eq("id",id).select();
    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    if(!data || data.length===0)
    {
        return res.status(404).json({message: "User Not Found"});
    }

    res.status(200).json({message:"User deleted", deletedUser: data[0]});

};