import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'

import 'styles/css/reset.css'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})