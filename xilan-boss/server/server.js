const express = require("express");
const userRouter = require("./user");
//新建app
const app = express();

app.use("/user", userRouter);
app.listen(9000, function () {
  console.log("server is running at port 9000");
});
