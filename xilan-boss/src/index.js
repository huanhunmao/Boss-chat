import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import rootReducer from "./reducer";
import "./config";
import "antd-mobile/dist/antd-mobile.css";
import Login from "./container/Login/login";
import Register from "./container/Register/register";
import AuthRoute from "./component/authroute/authroute";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
  )
);
// console.log(store.getState());
function Boss() {
  return <h2>Boss页面 </h2>;
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path="/boss" component={Boss}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
