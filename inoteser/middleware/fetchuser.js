var jwt=require("jsonwebtoken")
jwtsec="mayankisAgoodBoy1m@1359028401-)820"
const fetchu=(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send({error:"Please login to access"})
    }
    try {
        const data=jwt.verify(token,jwtsec)   
        req.user=data.id
        next()
    } catch (error) {
        res.status(401).send({error:"Please use a valid token"})
    }
}
module.exports=fetchu