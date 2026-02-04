import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
)

export const connectDB= async()=>{

    const {error}= await supabase.from("persons_99").select("*").limit(1);

    if(error)
    {
        console.log("DB not connected");
    }
    else{
        console.log("DB connected success");
    }

};


