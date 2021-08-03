import axios from "axios";
import { getRedirectPath } from "../../src/utils";
// 定义常量
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_ERROR = "REGISTER_ERROR";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOAD_DATA = "LOAD_DATA";
//定义初始值
const initState = {
  redirectTo: "",
  isAuth: false,
  user: "",
  pwd: "",
  type: "",
};
// 写redux 先写个最基本的内容
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        msg: "",
        redirectTo: getRedirectPath(action.payload),
        isAuth: true,
        ...action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        msg: "",
        redirectTo: getRedirectPath(action.payload),
        isAuth: true,
        ...action.payload,
      };
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case REGISTER_ERROR:
      return { ...state, isAuth: false, msg: action.msg };
    default:
      return state;
  }
}

function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data };
}
function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, payload: data };
}
// 定义错误处理函数
function errorMsg(msg) {
  return { type: REGISTER_ERROR, msg: msg };
}
export function loadData(userinfo) {
  return {
    type: LOAD_DATA,
    payload: userinfo,
  };
}
//登录
export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg("请输入用户名或密码");
  }
  //异步获取数据
  return (dispatch) => {
    axios.post("/user/login", { user, pwd }).then((res) => {
      if ((res.status == 200) & (res.data.code == 0)) {
        dispatch(loginSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}
// 注册阶段处理函数
export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd) {
    return errorMsg("用户名或者密码未输入");
  }
  if (pwd != repeatpwd) {
    return errorMsg("两次密码输入需要相同");
  }
  // 使用axios 异步请求数据  注意 post后面携带了数据
  return (dispatch) => {
    axios.post("/user/register", { user, pwd, type }).then((res) => {
      if ((res.status == 200) & (res.data.code == 0)) {
        dispatch(registerSuccess({ user, pwd, type }));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}
