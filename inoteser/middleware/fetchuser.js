var jwt=require("jsonwebtoken")
jwtsec="7d3fba9dcfe40f298c1675665262d7597bd868518f70906c60351da07e000d5f52d18b899ba67260d5ad7a51a9f9ffb9c179697a855d756d88d4c1be9d88392b"
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