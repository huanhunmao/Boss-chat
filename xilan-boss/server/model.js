// 放mongo 操作
const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", function () {
  console.log("mongo connect successfully !");
});
