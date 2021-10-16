const express = require("express");
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const router = express.Router();
const fetchu=require("../middleware/fetchuser")
jwtsec="7d3fba9dcfe40f298c1675665262d7597bd868518f70906c60351da07e000d5f52d18b899ba67260d5ad7a51a9f9ffb9c179697a855d756d88d4c1be9d88392b"
// create user using POST : doesnt require auth
router.post(
  "/createu",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("password", "Enter a valid password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } 
    else if((await User.findOne({email:req.body.email}))){
      res.json({error:"A user already exists with this email"});
    }
    const salt=await bcrypt.genSalt(10)
    const passhash=await bcrypt.hash(req.body.password,salt)
    const user = User({name:req.body.name,email:req.body.email,password:passhash});
    user.save();
    res.json({ status: "Successful"});
  }
);
router.post("/login",[
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").exists()
  ],async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try{
    const {email,password}=req.body
    let user=await User.findOne({email})
    let passcompare=false
    if(user){
      passcompare=await bcrypt.compare(req.body.password,user.password)
    }
    else{
      return res.json({error:"Invalid Credentials"})
    }
    if(passcompare){
        const data={
            id:user._id
          }
        const jwttok=jwt.sign(data,jwtsec,{ expiresIn: 60 * 60 })
        res.cookie("auth-token",jwttok,{secure:true})
      return res.json({status:"Successful"});
    }
    return res.json({error:"Invalid Credentials"});
  }catch(error){
    console.error(error)
  }
  }
) 
router.post('/guser',fetchu,async (req,res)=>{
    const user=await User.findById(req.user).select("-password")
    res.send(user)
})
router.get('/logout',fetchu,async (req,res)=>{
  req.clearCookie('auth-token')
  res.send("Logged out")
})
module.exports=router