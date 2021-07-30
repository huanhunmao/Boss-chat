import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //组件内使用 读取到 store初始值
    const store = this.props.store;
    const number = store.getState();
    const add = this.props.add;
    const out = this.props.out;
    const addAsync = this.props.addAsync;
    return (
      <div>
        现在有数量{number}个
        <button
          onClick={() => {
            store.dispatch(add());
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            store.dispatch(out());
          }}
        >
          out
        </button>
        <button
          onClick={() => {
            store.dispatch(addAsync());
          }}
        >
          addAsync
        </button>
      </div>
    );
  }
}
export default App;
