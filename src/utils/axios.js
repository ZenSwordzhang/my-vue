import axios from 'axios'
import Router from '../router'
import { Message } from "element-ui"

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//设置超时时间
axios.defaults.timeout = 36000000;

axios.interceptors.response.use(
    response => {
        // 检测某种状态进行重定向
        if (response.data.code === 403) {
            Router.push({
                name: 'login'
            })
        }
        return response;
    },
    error => {
        Message({
            message: error.message,
            type: "error",
            duration: 5000,
        })
        return Promise.resolve(error.response);
    }
);


export default axios