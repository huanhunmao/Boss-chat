const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

//两个参数
// 这是一个 reducer
export function auth(state = { isAuth: false, user: "test" }, action) {
  //   console.log(state);
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
}

//action
export function login() {
  return { type: LOGIN };
}
export function logout() {
  return { type: LOGOUT };
}
