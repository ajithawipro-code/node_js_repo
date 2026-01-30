import bcrypt from "bcrypt";
import { supabase } from "../supabaseClient.js";


export const createUsers= async(req,res)=>{

    const{name, email, password} = req.body;

    const hashpassword= await bcrypt.hash(password,10);

    const {data,error} = await supabase
                              .from("users_1")
                              .insert([{name,email,password:hashpassword}])
                              .select();

    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    res.status(200).json({message:"User created", user: data[0]});

}

export const getUsers = async(req,res)=>{

    const {data,error} = await supabase.from("users_1").select("*");

    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    res.status(200).json({message: " All signed users", users: data});

}

export const deleteUsers= async (req,res)=>{

       console.log("Inside here");

    const {id} = req.params; 

    const {data,error} = await supabase.from("users_1").delete().eq("id",id).select();

    if(error)
    {
        return res.status(500).json({error : error.message});
    }

    res.status(200).json({message: "deleted user", user: data});

};