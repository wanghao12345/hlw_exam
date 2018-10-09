/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *http://localhost:8888/#/login
 */

import {getStore} from './localStorage'

let baseUrl = 'http://127.0.0.1:8080';
let token = getStore('token');
export {
    baseUrl,
    token
}