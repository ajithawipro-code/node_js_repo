import jwt from "jsonwebtoken";
export const authenticate=async(req,res,next)=>{

    const authHeader = req.headers.authorization;
    console.log("authHeader is-->", authHeader);

    if(!authHeader || !authHeader.startsWith("Bearer "))
    {
        return res.status(400).json({message: "Token missing"});
    }

    const token= authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    console.log(decoded);
    console.log(req.user.id);

    next();
}

