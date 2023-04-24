var jwt=require("jsonwebtoken")
jwtsec="Enter Your JWT Secret"
const fetchu=(req,res,next)=>{
    const token=req.cookies['auth-token']
    if(!token){
        res.status(401).send({error:"Please login to access"})
    }
    try {
        const data=jwt.verify(token,jwtsec)   
        req.user=data.id
        next()
    } catch (error) {
        res.status(404).send({error:"Please use a valid token"})
    }
}
module.exports=fetchu
