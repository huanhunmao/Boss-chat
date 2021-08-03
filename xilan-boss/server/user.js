const utils = require("utility");
const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
const _filter = { pwd: 0, __v: 0 };
Router.get("/list", function (req, res) {
  // 清除所有账号密码
  // User.remove({}, function (e, d) {});
  User.find({}, function (err, doc) {
    return res.json(doc);
  });
});

// 登录
Router.post("/login", function (req, res) {
  const { user, pwd } = req.body;
  // 注意此处 md5加密  查找也需要 md5查找
  User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function (err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: "用户名或者密码错误" });
    } else {
      res.cookie("userid", doc.id);
      return res.json({ code: 0, data: doc });
    }
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

    //需要将 create 更改为 save方法 因为初始没有 id
    const userModel = new User({ user, pwd: md5Pwd(pwd), type });
    userModel.save(function (e, d) {
      if (e) {
        return res.json({ code: 1, msg: "后端出错啦" });
      }
      //取参数
      const { user, type, _id } = d;
      //写入 cookie
      res.cookie("userid", _id);
      return res.json({ code: 0, data: { user, type, _id } });
    });
    // User.create({ user, pwd: md5Pwd(pwd), type }, function (e, d) {
    //   if (e) {
    //     return res.json({ code: 1, msg: "后端出错啦" });
    //   }
    //   return res.json({ code: 0 });
    // });
  });
});

Router.get("/info", function (req, res) {
  // 此处应该是 根据用户有没有 cookie 返回不同的内容

  //拿到 cookie
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({ code: 1 });
  }
  User.findOne({ _id: userid }, _filter, function (err, doc) {
    if (err) {
      return res.json({ code: 1, msg: "后端出错啦" });
    }
    if (doc) {
      return res.json({ code: 0, data: doc });
    }
  });
});

function md5Pwd(pwd) {
  //这是一个常量或者可以生成随机字符串
  const salt = "xilan_dkdjdjdjdjdj_102_*&6!!!_xxxx";
  return utils.md5(utils.md5(pwd + salt)); // 两层md5 + 一个复杂字符串 比较安全
}
module.exports = Router;
