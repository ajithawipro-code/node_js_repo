export const checkValidation= async(req,res,next)=>{

    const {name, email,password, age } = req.body;

    if(!name)
    {
        return res.status(400).json("Name must not be empty");
    }

    if(!email.includes("@"))
    {
        return res.status(400).json("Email must be valid format");
    }

    if(!password || password.length<8)
    {
        return res.status(400).json("Password cannot be empty or less than 8 characters");
    }

    if(!age || Number(age)<18)
    {
        return res.status(400).json("Age cannot be null or less than 18");
    }

    next();

};