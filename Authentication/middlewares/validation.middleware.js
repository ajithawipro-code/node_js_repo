export const checkValidation= async (req,res,next)=>{

    const {name, email, age, location, password} = req.body;

    if(!name || name.trim().length===0)
        {
            return res.status(400).json({message:"name is invalid"});
        }
    if(!email || !email.includes('@'))
    {
        return res.status(400).json("Email null or invalid");
    }
    if(age===undefined || age===null || Number(age)<=0)
    {
        return res.status(400).json("Age is invalid");
    }
    if(!location || location.trim().length===0)
    {
        return res.status(400).json("location is invalid");
    }
   if(!password || password.trim().length<6)
   {
    return res.status(400).json("Password should be more than 6 characters");
   }

    next();
};

