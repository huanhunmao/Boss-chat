import { createStore } from "redux";

//新建两个type 常量
const ADD_COUNTER = "add";
const OUT_COUNTER = "out";

// 3 这是一个reducer函数接受 state action
export function counter(state = 10, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return state + 1;
      break;
    case OUT_COUNTER:
      return state - 1;
      break;
    default:
      return state;
  }
}

//此处可使用 常量 非常方便
export function add() {
  return { type: ADD_COUNTER };
}
export function out() {
  return { type: OUT_COUNTER };
}

export function addAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}
