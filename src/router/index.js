import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'

import Paper from '@/pages/paper/Paper'
import TextResult from '@/pages/result/TextResult'
import MyCenter from '@/pages/center/MyCenter'
import MyRecord from '@/pages/center/MyRecord'
import MyModify from '@/pages/center/MyModify'


Vue.use(Router);

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     redirect: '/login/1'
        // },
        {
            path: '/login/:examId',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/paper',
            name: 'paper',
            component: Paper
        },
        {
            path: '/result',
            name: 'Result',
            component: TextResult
        },
        {
            path: '/center',
            name: 'center',
            component: MyCenter
        },
        {
            path: '/modify',
            name: 'modify',
            component: MyModify
        },
        {
            path: '/record',
            name: 'record',
            component: MyRecord
        }
    ]
})

