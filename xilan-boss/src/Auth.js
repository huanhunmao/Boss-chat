import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "./Auth.redux";

// 两个reducers 每个reducers 都有一个 state
/*jshint -W030 */
connect((state) => (state, { login }));

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {console.log(this.props.isAuth)}

        <h2>抱歉,你没有权限,需要登录后才可查看</h2>
        {/* 点击之后执行登录函数 */}
        <button onClick={this.props.login}>登录</button>
        {console.log(this.props)}
        {this.props.isAuth ? <Redirect to="/dashboard" /> : null}
      </div>
    );
  }
}

export default Auth;
