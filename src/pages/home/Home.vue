<template>
    <div class="home-box">
        <h1 class="l-title">公务员诚信培训在线考试</h1>
        <div class="item-box item-box1" v-bind:class="{item_box_no : !isAllowExam}">
            <div class="item-icon item-icon1"  @click="handleStartExam">
                <img v-show="isAllowExam" src="../../../static/img/home-icon1.png" alt="开始考试">
                <img v-show="!isAllowExam" src="../../../static/img/home-icon1-no.png" alt="开始考试">
            </div>
            <div class="item-text item-text1" @click="handleStartExam">开始考试</div>
        </div>
        <div class="item-box item-box2">
            <div class="item-icon item-icon2" @click="handleGetExamData">
                <img src="../../../static/img/home-icon2.png" alt="教材下载">
            </div>
            <div class="item-text item-text2" @click="handleGetExamData">教材下载</div>
        </div>
        <div class="item-box item-box3">
            <div class="item-icon item-icon3" @click="handleGotoCenter">
                <img src="../../../static/img/home-icon3.png" alt="个人中心">
            </div>
            <div class="item-text item-text3" @click="handleGotoCenter">个人中心</div>
        </div>
    </div>
</template>

<script>
    import {getExamData} from '@/service/getData'
    import {getStore} from '@/config/localStorage'
    export default {
        name: "Home",
        data () {
            return {
                isAllowExam: true
            }
        },
        mounted () {
            this.$loadingClose();

            let token = getStore('token');
            if(token === null || token ==="" || token === undefined){
                var _this = this;
                let id = getStore('examId');
                this.$myAlertOpen('请扫码进入该考试系统！', function () {
                    _this.$router.push('/login/'+id);
                }, function () {
                    _this.$router.push('/login/'+id);
                });
            }



        },
        methods: {
            /**
             * 开始考试
             */
            handleStartExam () {
                if(this.isAllowExam){
                    this.$router.push('/paper');
                }
            },
            /**
             * 教材下载
             */
            handleGetExamData () {
                this.$router.push('/study');
            },
            /**
             * 创建iframe资料下载
             */
            createDownload (url) {
                let iframe = document.createElement("iframe")
                iframe.style.display = "none";
                iframe.src = url;
                document.body.appendChild(iframe);
            },

            /**
             * 个人中心
             */
            handleGotoCenter () {
                this.$router.push('/center');
            }
        }
    }
</script>

<style scoped>
    .home-box{
        width: 100%;
        height: 100%;
        background: url("../../../static/img/home-bg.png");
        background-size: 100% 100%;
        box-sizing: border-box;
        padding-top: 4rem;
    }
    .l-title{
        width: 100%;
        font-size: 0.9rem;
        text-align: center;
        color: white;
        margin-bottom: 3rem;
        letter-spacing: 1px;
    }
    .item-box{
        width: 13rem;
        height: 4rem;
        background: url("../../../static/img/home-item-box.png");
        background-size: 100% 100%;
        margin: 0 auto;
        margin-bottom: 0.3rem;
        overflow: hidden;
    }
    .item_box_no{
        background: url("../../../static/img/home-item-box-no.png");
        background-size: 100% 100%;
    }
    .item-box .item-icon{
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
    }
    .item-box .item-icon img{
        width: 2.5rem;
        margin-top: 0.75rem;
    }
    .item-box .item-text{
        width: 38%;
        height: 100%;
        float: left;
        text-align: center;
        color: white;
        line-height: 4rem;
        font-size: 0.8rem;
    }



</style>
