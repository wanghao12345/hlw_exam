<template>
    <div class="login-box">
        <form ref="loginForm" autocomplete="on" :model="loginForm">
            <h1 class="l-title">公务员诚信培训在线考试</h1>
            <div class="form-item">
                <input v-model="loginForm.username" v-on:input ="handleInputFunc" type="text" name="username" placeholder="请输入手机号" autocomplete="on">
            </div>
            <div class="form-item">
                <input v-model="loginForm.password" v-on:input ="handleInputFunc" type="password" name="password" placeholder="请输入密码" autocomplete="on">
            </div>
            <div class="form-item form-item-b">
                <p class="tip">{{msg}}</p>
            </div>
            <div class="form-item form-item-b">
                <button type="button" v-bind:class="{active: clickLoginBtn}" @click="handleClickLogin">登录</button>
            </div>
        </form>

    </div>
</template>

<script>
    import {sendLogin} from '@/service/getData'
    import {setStore, getStore, setCookie} from '@/config/localStorage'
    export default {
        name: "Login",
        data () {
            return {
                msg: '',
                loginForm: {
                    username: '',
                    password: ''
                },
                clickLoginBtn: false
            }
        },
        mounted() {

            let loginUserName = getStore('loginUserName');
            let loginPassWord = getStore('loginPassWord');
            let token = getStore('token');
            if(loginUserName && loginPassWord && token){
                this.$router.push('/home');
            }
        },
        methods: {
            /**
             * 输入事件
             */
            handleInputFunc () {
                this.clickLoginBtn = false;
            },
            /**
             * 登录按钮
             */
            handleClickLogin () {
                this.$loadingOpen();
                this.clickLoginBtn = true;
                if(this.checkLoginFormNull()){
                    this.handleLoginRequest();
                }
            },
            /**
             * 验证空
             */
            checkLoginFormNull () {
                if(this.loginForm.username.replace(/\s+/g,"") == ""){
                    this.$loadingClose();
                    this.msg = '请输入手机号';
                    return false;
                }else if(this.loginForm.password.replace(/\s+/g,"") == ""){
                    this.$loadingClose();
                    this.msg = '请输入登录密码';
                    return false;
                }else if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.loginForm.username))){
                    this.$loadingClose();
                    this.msg = '手机号码格式不对';
                    return false;
                }else{
                    this.msg = '';
                    return true;
                }
            },
            /**
             * 验证账号
             */
            async handleLoginRequest () {
                let res = await sendLogin(this.loginForm.username, this.loginForm.password);
                console.log(res);
                this.$loadingClose();
                if(res.token){
                    this.saveUserInfo(res);
                }else{
                    this.msg = res.data;
                    this.$loadingClose();
                }
            },
            /**
             * 保存个人信息
             */
            saveUserInfo (res) {
                setStore('loginUserName', this.loginForm.username);
                setStore('loginPassWord', this.loginForm.password);
                setStore('token', res.token);
                setStore('tokenUserName', res.data);
                this.$router.push('/home');
            }
        }
    }
</script>

<style scoped>
    .login-box{
        width: 100%;
        height: 100%;
        background: url("../../../static/img/login-bg.png");
        background-size: 100% 100%;
        box-sizing: border-box;
        padding-top: 4rem;
    }
    .l-title{
        width: 100%;
        font-size: 0.9rem;
        text-align: center;
        color: #4abdff;
        margin-bottom: 3rem;
        letter-spacing: 1px;
    }
    .l-title:after{
        content: '';
        display: block;
        width: 9.5rem;
        height: 0.08rem;
        background-color: #4abdff;
        margin: 0.7rem auto;
    }
    .form-item{
        width: 100%;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
    }
    .form-item-b{
        height: 1.5rem;
        line-height: 1rem;
    }
    .form-item-b p{
        width: 13rem;
        display: block;
        height: 100%;
        text-align: left;
        margin: 0 auto;
    }
    .form-item input{
        width: 13rem;
        height: 2rem;
        box-sizing: border-box;
        padding-left: 0.2rem;
        border: 0;
        border-bottom: 1px solid #e6e6e6;
        font-size: 0.75rem;
    }
    .form-item button{
        width: 13rem;
        height: 2rem;
        border: 0;
        background-color: #4abdff;
        border-radius: 2rem;
        color: white;
        font-size: 0.8rem;
        letter-spacing: 1px;
    }
    .form-item button.active{
        background-color: #26b0ff ;
    }
    .tip{
        color: red;
    }
</style>