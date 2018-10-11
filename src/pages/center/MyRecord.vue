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
                <li :class="{'bad-score' : item.scoreTip ==='不合格'}" v-for="item in recordData">
                    <div class="top">
                        <span class="title">{{item.examName}}</span>
                        <span class="score">{{item.score}}</span>
                    </div>
                    <div class="bottom">

                        <div class="item" v-for="detail in item.details">
                            <span class="left">分数：<i class="good-score" :class="{'bad-score' : detail.scoreTip === '不合格'}">{{detail.score}}({{detail.scoreTip}})</i></span>
                            <span class="right">{{detail.startTime}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getHistoryRecord} from '@/service/getData'
    export default {
        name: "MyRecord",
        data () {
            return {
                //记录数据
                recordData:[],
                //
                badScore: false
            }
        },
        mounted () {
            this.$loadingOpen();
            this.getRecord();
        },
        methods: {
            /**
             * 获取记录
             */
            async getRecord () {
                let res = await getHistoryRecord();
                let _this = this;
                if(res.code === '10'){
                    this.recordData = res.data;
                }else{

                    if(res.code === "-50"){
                        this.$myAlertOpen(res.msg, function () {
                            _this.$router.push('/login');
                        }, function () {
                            _this.$router.push('/login');
                        });
                    }else{
                        this.$myAlertOpen(res.msg, function () {
                            _this.$router.push('/center');
                        }, function () {
                            _this.$router.push('/center');
                        });
                    }
                }
                console.log(res);
                this.$loadingClose();
            }
        }
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
    .record-box ul li .bottom .item span i.bad-score{
        color: #ff8080;
    }
    .record-box ul li.bad-score .bottom .item span i.good-score{
        color: #ff8080;
    }
</style>