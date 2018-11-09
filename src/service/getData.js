import fetch from '../config/fetch'



/**
 * 手机号登录
 */
export const sendLogin = (userName, passWord, paperId) => fetch('/h5/user/auth', {
    userName,
    passWord,
    paperId
}, 'POST');


/**
 * 修改密码
 */
export const modifyPwd = (oldPwd, newPwd) => fetch('/h5/user/updatePassword', {
    oldPwd,
    newPwd,
}, 'POST');

/**
 * 获取考试
 */
export const getCurExam = (id) => fetch('/h5/exam/getCurExam', {id}, 'POST');

/**
 * 教材下载
 */
export const getExamData = () => fetch('/h5/exam/downStudyData', {}, 'POST');
/**
 * 提交答案
 */
export const submitExam = (id, ids, ans, st) => fetch('/h5/exam/submitExam', {
    id,
    ids,
    ans,
    st
}, 'POST');

/**
 * 历史成绩
 */
export const getHistoryRecord = () => fetch('/h5/exam/listRecord', {}, 'POST');
