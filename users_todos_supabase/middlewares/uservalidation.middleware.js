export const checkUserValidation= ((req,res,next)=>{

    const {name,email,password} = req.body;

    if(!name)
    {
        return res.status(400).json("Name not found");
    }
    if(!email || !email.includes("@"))
    {
        return res.status(400).json("Email is not found or email is invalid");

    }

    if(!password || password.length<6)
    {
        return res.status(400).json("Password is not found or password is less than 6 characters");
    }

    next();
});