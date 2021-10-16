const express = require('express')
var cookieParser = require('cookie-parser')
const path = require('path')
var cors=require("cors")
const dbconnect=require("./db")
const app = express()
app.use(express.json())
app.use(cookieParser())
/*var whitelist = ["http://localhost:5000"]
var corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log(origin)
      callback(new Error('Not allowed by CORS'))
    }
  }
}*/

//app.use(cors(corsOptions));
//app.use(cors())
const port = 5000
dbconnect()
app.use(express.static(path.join(__dirname, 'build')));
app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes/",require("./routes/notes"))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})