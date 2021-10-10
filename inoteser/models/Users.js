const db = require("mongoose")

const userschema = new db.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    datecreated:{type:Date,default:Date.now}
})

module.exports=db.model('users',userschema)