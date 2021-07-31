import React from "react";
import { connect } from "react-redux";
import { add, out, addAsync } from "./index.redux.js";

connect((state) => ({
  num: state.counter,
}));
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //组件内使用 读取到 store初始值
    return (
      <div>
        现在有数量有{this.props.num}个
        <button onClick={this.props.add}>add</button>
        <button onClick={this.props.out}>out</button>
        <button onClick={this.props.addAsync}>addAsync</button>
      </div>
    );
  }
}

// 数据状态
const mapStatetoProps = (state) => {
  return { num: state };
};

// 所有的action
const actionCreators = { add, out, addAsync };

// 两者连接 并且传入参数 App
App = connect(mapStatetoProps, actionCreators)(App);
export default App;
