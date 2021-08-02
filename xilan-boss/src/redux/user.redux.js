import axios from "axios";
// 定义常量
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_ERROR = "REGISTER_ERROR";

//定义初始值
const initState = {
  isAuth: false,
  user: "",
  pwd: "",
  type: "",
};
// 写redux 先写个最基本的内容
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: "", isAuth: true, ...action.payload };
    case REGISTER_ERROR:
      return { ...state, isAuth: false, msg: action.msg };
    default:
      return state;
  }
}

function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data };
}
// 定义错误处理函数
function errorMsg(msg) {
  return { type: REGISTER_ERROR, msg: msg };
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
