import fetch from '../config/fetch'


/**
 * 手机号登录
 */
export const sendLogin = (userName, passWord ) => fetch('/h5/user/auth', {
    userName,
    passWord
}, 'POST');


