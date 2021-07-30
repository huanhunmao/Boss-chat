import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counter, add, out, addAsync } from "./index.redux";

const store = createStore(counter, applyMiddleware(thunk));
function render() {
  ReactDOM.render(
    <App store={store} add={add} out={out} addAsync={addAsync} />,
    document.getElementById("root")
  );
}
render();

//订阅render 每次修改 重写渲染
store.subscribe(render);
