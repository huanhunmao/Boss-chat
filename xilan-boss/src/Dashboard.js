import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import App from "./App";
import { connect } from "react-redux";
import { logout } from "./Auth.redux";
//常量
function xxx(params) {
  return <h2>页面A</h2>;
}
function yyy(params) {
  return <h2>页面B</h2>;
}
connect((state) => (state.auth, { logout }));
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //熟悉到history location match
    console.log(this.props);
    //此处设置跳转
    const redirectToLogin = <Redirect to="/login"></Redirect>;
    //注意此处 当作一个整体 渲染来处理非常nice
    const app = (
      <div>
        <h1>测试</h1>
        {this.props.isAuth ? (
          <button onClick={this.props.logout}></button>
        ) : null}
        <ul>
          <li>
            <Link to="/dashboard">页面</Link>
          </li>
          <li>
            <Link to="/dashboard/xxx">页面A</Link>
          </li>
          <li>
            <Link to="/dashboard/yyy">页面B</Link>
          </li>
        </ul>
        <Route path="/dashboard" exact component={App}></Route>
        <Route path="/dashboard/xxx" component={xxx}></Route>
        <Route path="/dashboard/yyy" component={yyy}></Route>
      </div>
    );
    //通过判断 isAuth的状态 来确定是否跳转到登录状态 还是处在当前页面
    return this.props.isAuth ? app : redirectToLogin;
  }
}

export default Dashboard;
