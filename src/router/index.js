import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'

import Paper from '@/pages/paper/Paper'
import TextResult from '@/pages/result/TextResult'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
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
            name: 'result',
            component: TextResult
        }
    ]
})

