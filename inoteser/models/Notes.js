const db = require("mongoose")

const noteschema = new db.Schema({
    title:{type:String,required:true},
    description:{type:String},
    topic:{type:String,default:"general"},
    datecreated:{type:Date}
})

module.exports=db.model('notes',noteschema)