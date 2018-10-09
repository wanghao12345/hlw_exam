import fetch from '../config/fetch'



/**
 * 手机号登录
 */
export const sendLogin = (userName, passWord ) => fetch('/h5/user/auth', {
    userName,
    passWord
}, 'POST');


/**
 * 修改密码
 */
export const modifyPwd = (oldPwd, newPwd) => fetch('/h5/user/updatePassword', {
    oldPwd,
    newPwd,
}, 'POST');
