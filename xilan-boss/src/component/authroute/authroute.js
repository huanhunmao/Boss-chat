import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { loadData } from "../../redux/user.redux";
import { connect } from "react-redux";
@withRouter
@connect(null, { loadData })
class AuthRoute extends React.Component {
  componentDidMount() {
    const plubicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (plubicList.indexOf(pathname) > -1) {
      return null;
    }
    //否则执行下面的
    //获取用户信息
    axios.get("/user/info").then((res) => {
      if (res.status == 200) {
        if (res.data.code == 0) {
          // 有登录信息
          this.props.loadData(res.data.data);
        } else {
          //   console.log(this.props.history); // undefined
          this.props.history.push("/login");
        }
        console.log(res.data);
      }
    });

    //还需要做什么 ？
    // 现在的url地址 如果是 /login 是不需要跳转的
    // 用户的type身份是boss还是牛人
    // 用户是否 完善了信息 （选择头像 个人简历） 判断完善后才能看到列表
  }
  render() {
    return null;
  }
}

export default AuthRoute;
