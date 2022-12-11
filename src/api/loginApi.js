import {reqRealEnd, reqRealEndAsync} from "@/api/axiosCommon";

import {config} from "@/api/frontConfig";

import router from "@/router";

//请求验证码
export const queryCaptcha = (callback) => {

    return reqRealEndAsync("post", config.real_domain,
        "/login/captcha", {}, callback);
};

// 登录
export const login = (params, callback) => {
    return reqRealEndAsync("post", config.real_domain,
        "/login/userlogin", params, callback);
};