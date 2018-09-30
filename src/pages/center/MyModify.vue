<template>
    <div class="myCener-box">
        <div class="center-head">
            <router-link to="/home" tag="div" class="center-back">
                <img src="../../../static/img/result-back.png" alt="返回">
            </router-link>
            修改密码
        </div>
        <div class="modify-box">
            <div class="item-box">
                <label>旧密码</label>
                <input type="password" placeholder="请输入您的原密码">
            </div>
            <div class="item-box">
                <label>新密码</label>
                <input type="password" placeholder="新密码(6-16个字符，可用数字、字母(区分大小写))">
            </div>
            <div class="item-box">
                <label>确认新密码</label>
                <input type="password" placeholder="再次输入您的密码">
            </div>

            <div class="modify-btn">
                <button>确定修改</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyModify"
    }
</script>

<style scoped>
    .modify-box{
        width: 100%;
        height: 100%;
        margin-top: -2rem;
        box-sizing: border-box;
        padding-top: 2rem;
        overflow-y: auto;
    }
    .item-box{
        width: 100%;
        height: 3.5rem;
    }
    .item-box label{
        display: block;
        width: 100%;
        height: 1.5rem;
        font-size: 0.7rem;
        line-height: 1.5rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 0.5rem;
    }
    .item-box input{
        width: 100%;
        height: 2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 0;
        padding-left: 0.5rem;
        background-color: white;
        font-size: 0.6rem;
    }
    .modify-btn{
        width: 100%;
        height: 2.2rem;
        margin-top: 2rem;
        text-align: center;
    }
    .modify-btn button{
        width: 12rem;
        height: 100%;
        background: url("../../../static/img/paper-no-next.png");
        background-size: 100% 100%;
        border: 0;
        color: white;
        font-size: 0.7rem;
    }
    .modify-btn button:active{
        width: 11.9rem;
        height: 2.1rem;
    }
</style>

























