import axios from "axios";
import { Message } from "element-ui";
import { getToken, getUserName } from "@/utils/app";
import Router from "vue-router";

axios.baseURL =
  process.env.NODE_ENV === "production" ? "/prod/api/v1" : "/dev/api/v1";
//设置超时时间
axios.defaults.timeout = 36000000;

/**
 * 请求接口前，做一些数据处理（请求拦截器）
 */
axios.interceptors.request.use(
  config => {
    // 发送请求前，将参数添加到请求头
    config.headers["token"] = getToken();
    config.headers["userName"] = getUserName();
    return config;
  },
  error => {
    // 错误请求处理方式
    return Promise.reject(error);
  }
);

/**
 * 请求接口后，返回数据进行拦截（响应拦截器）
 */
axios.interceptors.response.use(
  response => {
    Message.error(response.data.message);
    // 检测某种状态进行重定向
    if (response.data.code === 403) {
      // TODO
      Router.push({
        name: "Login"
      });
    }
    return response;
  },
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 5000
    });
    return Promise.resolve(error.response);
  }
);

/**
 * 使用export default时，但不能同时存在多个default。
 * 文件 import 不需要花括号
 */
export default axios;
