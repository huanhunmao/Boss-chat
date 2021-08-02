const express = require("express");
const Router = express.Router();

Router.get("/info", function (req, res) {
  // 此处应该是 根据用户有没有 cookie 返回不同的内容
  return res.json({ code: 1 });
});

module.exports = Router;
