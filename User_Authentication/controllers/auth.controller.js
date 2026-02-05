import { supabase } from "../config/supabase.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup=async(req,res)=>{

    const{name, email, password} = req.body;

    const{data: existData,error:existError} = await supabase.from("user_auth")
                                                            .select("id")
                                                            .eq("email",email)
                                                            .maybeSingle();
    if(existError)
    {
        return res.status(500).json({error: error.message});
    }
    if(existData)
    {
        return res.status(409).json({message: "Duplicate entries exisitng email not allowed"});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const{data,error} = await supabase.from("user_auth")
                                      .insert([{name, email, password:hashedPassword}])
                                      .select();
    if(error)
    {
       return res.status(500).json({error:error.message});
    }
    return res.status(201).json({message: "User created successfully", data});

}

export const login=async(req,res)=>{

    const {email, password} = req.body;

    const{data :user, error: existingError} = await supabase.from("user_auth")
                                       .select()
                                       .eq("email",email)
                                       .maybeSingle();
    if(existingError)
    {
        return res.status(500).json({error: existingError.message});
    }
    if(!user)
    {
        return res.status(404).json({message:" No record found for the email ID"});
    }

    const isMatch = await bcrypt.compare(password,user.password);

    console.log(isMatch);

    if(!isMatch)
    {
        return res.status(403).json({message: "Not authorised -- Invalid credentials"});
    }

    const token= jwt.sign(
        {id: user.id},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
)

    const response = { 
        id:user?.id,
        name:user?.name,
        email:user?.email,
        token: token
    }
    
    return res.status(200).json({message:"User logged and verified successfully", response});

}