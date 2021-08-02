import React from "react";
import Logo from "../../component/logo/logo";
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio,
} from "antd-mobile";
import { connect } from "react-redux";
import { register } from "../../redux/user.redux";

@connect((state) => state.user, { register })
class Register extends React.Component {
  constructor(props) {
    super(props);
    //   this.register = this.register.bind(this);
    //1 定义初始值
    this.state = {
      user: "",
      pwd: "",
      repeatpwd: "",
      type: "genius",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  register() {
    this.props.history.push("/register");
    console.log("test");
  }
  //2 定义更新值
  handleChange(key, value) {
    this.setState({
      [key]: value,
    });
  }
  //3 打印点击注册的结果
  handleClick() {
    //调用 register函数
    this.props.register(this.state);
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo></Logo>
        <List>
          {this.props.msg ? (
            <p style={{ color: "red" }}>{this.props.msg}</p>
          ) : null}
          <InputItem onChange={(v) => this.handleChange("user", v)}>
            用户名
          </InputItem>
          <WhiteSpace />
          <InputItem
            type={"password"}
            onChange={(v) => this.handleChange("pwd", v)}
          >
            密码
          </InputItem>
          <WhiteSpace />
          <InputItem
            type={"password"}
            onChange={(v) => this.handleChange("repeatpwd", v)}
          >
            确认密码
          </InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type == "genius"}
            onChange={(v) => this.handleChange("type", "genius")}
          >
            牛人
          </RadioItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type == "boss"}
            onChange={(v) => this.handleChange("type", "boss")}
          >
            BOSS
          </RadioItem>
          <WhiteSpace />
          <Button type={"primary"} onClick={this.handleClick}>
            注册
          </Button>
        </List>
      </div>
    );
  }
}

export default Register;
