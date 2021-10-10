const express=require("express")
const fetchu = require("../middleware/fetchuser")
const Notes=require("../models/Notes")
const router=express.Router()
router.get("fetchanotes/",fetchu,async (req,res)=>{
    const notes=await Notes.find({user:req.user.id})
    res.json(notes)
})
module.exports=router