import fetch from '../config/fetch'


/**
 * 手机号登录
 */
export const sendLogin = (username, password ) => fetch('/v1/login/app_mobile', {
    username,
    password
}, 'POST');


