import { supabase } from "../config/supabase.config.js";

export const checkDB=async()=>{
    try{

        const {error} = await supabase.from("user_auth").select().limit(1);

        if(error)
        {
            console.log("DB Not Connected");
            return false;
        }
        else{
            console.log("*****DB CONNECTED SUCCESSFULLY*****");
            return true;
        }

    }
    catch(err){
        console.log("Error from catch block is:", err.message);        
    }

};