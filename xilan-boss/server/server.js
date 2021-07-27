const express = require("express");
const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", function () {
  console.log("mongo connect successfully !");
});

//新建文档字段
const User = mongoose.model(
  "user",
  new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true },
  })
);

//新增数据
// User.create(
//   {
//     user: "xiaoming",
//     age: 22,
//   },
//   function (err, doc) {
//     if (!err) {
//       console.log(doc);
//     } else {
//       console.log(err);
//     }
//   }
// );

//更新数据  update
User.update({ user: "xiaobei" }, { $set: { age: 30 } }, function (err, doc) {
  console.log(doc);
});
//删除数据
// User.remove({}, function (err, doc) {
//   console.log(doc);
// });
//新建app
const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/data", function (req, res) {
  //查找所有数据
  User.findOne({ user: "xiaoming" }, function (err, doc) {
    res.json(doc);
  });
});

app.listen(9000, function () {
  console.log("server is running at port 9000");
});
