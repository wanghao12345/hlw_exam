<template>
    <div class="myCener-box">
        <div class="center-head">
            <router-link to="/home" tag="div" class="center-back">
                <img src="../../../static/img/result-back.png" alt="返回">
            </router-link>
            个人中心
        </div>
        <div class="center-name">
            <img src="../../../static/img/center-headimg.png" alt="头像">
            <span id="userName"></span>
        </div>
        <div class="center-list">
            <router-link to="/record" tag="div" class="item">
                <div class="left">
                    <img src="../../../static/img/center-record-icon.png" alt="记录">
                    <span>答题记录</span>
                </div>
                <div class="right">
                    <img src="../../../static/img/center-right-icon.png" alt="向右">
                </div>
            </router-link>
            <router-link to="/modify" tag="div" class="item">
                <div class="left">
                    <img src="../../../static/img/center-modify-icon.png" alt="修改密码">
                    <span>修改密码</span>
                </div>
                <div class="right">
                    <img src="../../../static/img/center-right-icon.png" alt="向右">
                </div>
            </router-link>
        </div>
        <div class="center-logout" @click="handleLogoutRequest">
            退出登录
        </div>
        <!--<router-link to="/login" tag="div" class="center-logout">-->
            <!--退出登录-->
        <!--</router-link>-->
    </div>
</template>

<script>
    import {removeStore} from '@/config/localStorage'
    import {getStore} from '@/config/localStorage'
    export default {
        name: "MyCenter",
        data () {
            return {

            }
        },
        mounted () {
            document.getElementById('userName').innerText = getStore('tokenUserName');
        },
        methods: {
            /**
             * 退出登录
             */
            handleLogoutRequest(){
                removeStore('loginUserName');
                removeStore('loginPassWord');
                removeStore('loginUserToken');
                let examId = getStore('examId');
                this.$router.push('/login/' + examId);
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/styles/css/center/center.css";
    .center-name{
        width: 100%;
        height: 4rem;
        background-color:white;
        display: flex;
        display: -webkit-flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0.5rem 0;
    }
    .center-name img{
        width: 2.5rem;
        margin: 0 0.5rem 0 1rem;
    }
    .center-name span{
        color: black;
        font-size: 0.7rem;
    }
    .center-list{
        width: 100%;
        background-color: white;
    }
    .center-list .item{
        width: 100%;
        height: 2rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.5rem;
    }
    .center-list .item .left{
        height: 100%;
        line-height: 2rem;
    }
    .center-list .item .left img{
        width: 1.2rem;
        float: left;
        margin-top: 0.4rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }
    .center-list .item .left span{
        font-size: 0.7rem;
        color: #333;
    }
    .center-list .item .right img{
        width: 0.7rem;
    }
    .center-logout{
        width: 100%;
        height: 2rem;
        background-color: white;
        margin-top: 0.7rem;
        text-align: center;
        line-height: 2rem;
        color: #333;
        font-size: 0.7rem;
    }

</style>