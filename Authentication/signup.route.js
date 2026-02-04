
import express from "express";
import { supabase } from "./supabaseClient.js";
import bcrypt from "bcrypt";
import { checkValidation } from "./middlewares/validation.middleware.js";

export const signupRoute=express.Router();

signupRoute.post("/signup",checkValidation, async(req,res)=>{
    try{

    const{name, email, password, age, location}= req.body;

   const{data:existing,error:fetchError} = await supabase.from("persons_99")
                                                          .select()
                                                          .eq("email",email);                                                          
                                                          
    if(fetchError)
    {
        return res.status(500).json({fetch_error: fetchError.message});
    }
    if(existing.length>0)
    {
        return res.status(409).json({message:"Duplicate email entry restricted"});
    }

    const hashedPassword= await bcrypt.hash(password,10);

    const {error} = await supabase.from("persons_99")
                                       .insert([{name,email,password:hashedPassword,age,location}])
                                       .select();
    if(error)
    {
        return res.status(500).json({thiserror:error.message});
    }
    return res.status(201).json({message: "User signup successful"});
}
catch(err){
    return res.status(500).json({catch_error: err.message});
}
});


signupRoute.get("/myprofile",async(req,res)=>{
    try{

    

    const {name} = req.query;  

    if(name)
    {
        const{data: profile, error:fetchError} = await supabase.from("persons_99")
                                                .select("id,name,email,age,location")
                                                .eq("name",name);
    if(fetchError)
    {
            return res.status(500).json({error: fetchError.message});
    }

     if(!profile || profile.length===0)
    {
        return res.status(404).json({message: "No profile found"});
    }
        return res.status(200).json({message:"Profile of particular user", profile});
    }

    const{data,error}= await supabase.from("persons_99")
                                     .select("id,name,email,age,location");
    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    
    return res.status(200).json({message:"All users", Users: data});
}
catch(err)
{
    return res.status(500).json({catch_error: err.message});
}
});


signupRoute.post("/login",async(req,res)=>{
    try{

    const {email,password} = req.body;

    const{data,error} = await supabase.from("persons_99")
                                      .select("*")
                                      .eq("email",email);
    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    if(data.length===0)
    {
        return res.status(404).json("Email not found");
    }
     const isMatch= await bcrypt.compare(password, data[0].password);

        if(!isMatch)
        {
            return res.status(401).json({message: "Unauthorised - Password mismatch"});
        }
        else{
            return res.status(200).json("Email and Password matched - user login successful!");
        }
    }
    catch(err)
    {
        return res.status(500).json({catch_error: err.message});
    }
  
});