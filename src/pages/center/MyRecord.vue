<template>
    <div class="myCener-box">
        <div class="center-head">
            <router-link to="/home" tag="div" class="center-back">
                <img src="../../../static/img/result-back.png" alt="返回">
            </router-link>
            答题记录
        </div>
        <div class="record-box">
            <ul>
                <li class="bad-score">
                    <div class="top">
                        <span class="title">重庆公务员诚信在线考试</span>
                        <span class="score">100</span>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <span class="title">重庆公务员诚信在线考试</span>
                        <span class="score">100</span>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <span class="title">重庆公务员诚信在线考试</span>
                        <span class="score">100</span>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <span class="title">重庆公务员诚信在线考试</span>
                        <span class="score">100</span>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <span class="title">重庆公务员诚信在线考试</span>
                        <span class="score">100</span>
                    </div>
                    <div class="bottom">
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                        <div class="item">
                            <span class="left">分数：<i class="good-score">100(合格)</i></span>
                            <span class="right">2018-09-25 17:04</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyRecord"
    }
</script>

<style scoped>
    .record-box{
        width: 100%;
        height: 100%;
        margin-top: -2rem;
        box-sizing: border-box;
        padding-top: 2rem;
        overflow-y: auto;
    }
    .record-box ul{

    }
    .record-box ul li{
        width: 15rem;
        margin: 0 auto;
        margin-top: 0.5rem;
        background-color: white;
        border-radius: 5px;
     }
    .record-box ul li .top{
        width: 100%;
        height: 2.3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #f3f3f3;
        font-size: 0.7rem;
        line-height: 2.3rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;
    }
    .record-box ul li .top span{
        font-size: 0.7rem;
    }
    .record-box ul li .top span.score{
        width: 1.5rem;
        height: 1.5rem;
        background-color: #64c7ff;
        border-radius: 2rem;
        line-height: 1.5rem;
        text-align: center;
        color: white;
    }
    .record-box ul li.bad-score .top span.score{
        background-color: #ff8080;
    }
    .record-box ul li .bottom{
        padding-bottom: 0.5rem;
    }
    .record-box ul li .bottom .item{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 0.5rem;
    }
    .record-box ul li .bottom .item span{
        color: #828181;
        font-size: 0.65rem;
    }
    .record-box ul li .bottom .item span i.good-score{
        font-style: normal;
        color: #64c7ff;
        font-size: 0.65rem;
    }
    .record-box ul li.bad-score .bottom .item span i.good-score{
        color: #ff8080;
    }
</style>