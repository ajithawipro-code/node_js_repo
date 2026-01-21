export const checkIncomingData=((req,res,next)=>{

    if(!req.body.title || !req.body.status)
    {
        res.status(400).json("Invalid body");

    }
    else{
        next();
    }

});