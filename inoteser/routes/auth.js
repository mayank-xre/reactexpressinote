const express = require("express");
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const router = express.Router();
const fetchu=require("../middleware/fetchuser")
jwtsec="mayankisAgoodBoy1m@1359028401-)820"
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
    const data={
      id:user._id
    }
    const jwttok=jwt.sign(data,jwtsec)
    res.json({ status: "Successful",authtoken: jwttok});
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
      passcompare=await bcrypt.compare(password,user.password)
    }
    else{
      return res.json({error:"Invalid Credentials"})
    }
    if(passcompare){
      const data={
        id:user._id
      }
      const jwttok=jwt.sign(data,jwtsec)
      return res.json({authtoken: jwttok});
    }
    return res.json({error:"Invalid Credentials"});
  }catch(error){
    console.log(error)
  }
  }
) 
router.post('/guser',fetchu,async (req,res)=>{
    const user=await User.findById(userId).select("-password")
    res.send(user)
})
module.exports=router