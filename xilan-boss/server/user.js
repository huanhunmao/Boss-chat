const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
Router.get("/list", function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc);
  });
});

//注册
Router.post("/register", function (req, res) {
  console.log(req.body);
  const { user, pwd, type } = req.body;
  //进行查找
  User.findOne({ user }, function (err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: "用户名重复" });
    }
    User.create({ user, pwd, type }, function (e, d) {
      if (e) {
        return res.json({ code: 1, msg: "后端出错啦" });
      }
      return res.json({ code: 0 });
    });
  });
});

Router.get("/info", function (req, res) {
  // 此处应该是 根据用户有没有 cookie 返回不同的内容
  return res.json({ code: 0 });
});

module.exports = Router;
