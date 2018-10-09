import Vue from 'vue'
import App from './App'
import router from './router'

import Loading from './plugin/loading/loading.js'
Vue.use(Loading);

import MyAlert from './plugin/myAlert/MyAlert.js'
Vue.use(MyAlert);

import './config/rem'

import 'styles/css/reset.css'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})