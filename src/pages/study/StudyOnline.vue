<template>
    <div class="myCener-box">
        <div class="center-head">
            <router-link to="/home" tag="div" class="center-back">
                <img src="../../../static/img/result-back.png" alt="返回">
            </router-link>
            在线学习
        </div>
        <div class="study-list">
            <div class="item" :key="item.url" v-for="item in StudyList" @click="loadingPDF(item.url)">
                <p class="title">
                   {{item.name}}
                </p>
                <p class="content">
                    <span class="left">在线学习</span>
                    <span class="right">开始学习></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getExamData} from '@/service/getData'
    import {removeStore} from '@/config/localStorage'
    import {getStore} from '@/config/localStorage'
    export default {
        name: "StudyOnline",
        data () {
            return {
                StudyList: []
            }
        },
        mounted () {
            this.getStudyList()
        },
        methods: {
            async getStudyList () {
                let _this = this
                 let res = await getExamData()
                 if(res.code === '10'){
                     _this.StudyList = res.data
                 }else{
                     if(res.code === "-50"){
                         let id = getStore('examId')
                         this.$myAlertOpen(res.msg, function () {
                             _this.$router.push('/login/'+id);
                         }, function () {
                             _this.$router.push('/login/'+id);
                         });
                     }else{
                         this.$myAlertOpen(res.msg);
                     }
                 }
            },

            loadingPDF (url) {
                this.$router.push({ name: 'PDF', query: { url: url } })
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/styles/css/center/center.css";
    .study-list{
        width: 100%;
        height: 100%;
        margin-top: -45px;
        box-sizing: border-box;
        overflow-y: auto;
        padding: 55px 10px 10px 10px;
    }
    .study-list .item{
        width: 100%;
        height: 90px;
        background-color: white;
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
    }
    .study-list .item p.title{
        width: 100%;
        height: 50px;
        font-size: 14px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .study-list .item p.content{
        width: 100%;
        height: 20px;
    }
    .study-list .item p.content span.left{
        color: #a7a7a7;
    }
    .study-list .item p.content span.right{
        color: #4abdff;
    }
</style>
