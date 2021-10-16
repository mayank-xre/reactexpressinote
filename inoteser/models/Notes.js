const db = require("mongoose")

const noteschema = new db.Schema({
    title:{type:String,required:true},
    description:{type:String},
    user:{type:db.Schema.Types.ObjectId,ref:"users"},
    topic:{type:String,default:"general"},
    datecreated:{type:Date,default:Date.now}
})

module.exports=db.model('notes',noteschema)