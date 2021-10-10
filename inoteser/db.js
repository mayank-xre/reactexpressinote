const db = require("mongoose");

const mongouri = "mongodb://localhost:27017/inote";

const connecttomongo = () => {
  db.connect(mongouri, () => {
    console.log("Connected to Mongo Successfully");
  });
};
module.exports = connecttomongo;
