// 放mongo 操作
const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/fhj-chat";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", function () {
  console.log("mongo connect successfully !");
});

const models = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    //头像
    avatar: { type: String },
    //个人简介
    desc: { type: String },
    //职位名
    title: { type: String },
    //如果角色是boss
    company: { type: String },
    money: { type: String },
  },
  chat: {},
};

// 循环遍历
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name);
  },
};
