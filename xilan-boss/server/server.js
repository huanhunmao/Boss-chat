const express = require("express");
const userRouter = require("./user");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//新建app
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRouter);
app.listen(9000, function () {
  console.log("server is running at port 9000");
});
