<template>
    <div class="paper-box">
        <div class="paper-title">
            <router-link to="/home" tag="div" class="paper-back">
                <img src="../../../static/img/paper-back.png" alt="返回">
            </router-link>
            <div class="paper-time">116:15</div>
            <div class="paper-list">15/36</div>
        </div>
        <div class="paper-content">
            <paper-single
                v-if="PaperType==1"
                :paperData="singlePaperData"
            ></paper-single>
            <paper-multi v-if="PaperType==2"></paper-multi>
            <paper-judgment v-if="PaperType==3"></paper-judgment>
        </div>
        <div class="paper-btn">
            <button v-show="isNextPaper" @click="handleNextPaper" class="paper-next-btn">下一题</button>
            <button v-show="!isNextPaper" class="paper-no-next-btn">下一题</button>
        </div>
    </div>
</template>

<script>
    import PaperJudgment from './component/PaperJudgment'
    import PaperMulti from './component/PaperMulti'
    import PaperSingle from './component/PaperSingle'
    export default {
        name: "Paper",
        components: {
            PaperJudgment,
            PaperMulti,
            PaperSingle
        },
        data () {
            return {
                isNextPaper: true, //是否进入下一页
                PaperType: 1,  //试卷类型：1、单选  2、多选  3、判断
                singlePaperData: [
                    {
                        'name': 'A.功能升高或兴奋'
                    },{
                        'name': 'B.功能降低功能降低或抑制功能降低或抑制功能降低或抑制功能降低或抑制功能降低或抑制或抑制'
                    },{
                        'name': 'C.兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制'
                    },{
                        'name': 'D.产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能'
                    }
                ]
            }
        },
        methods: {
            /**
             * 获取下一题
             */
            handleNextPaper () {
                this.PaperType = 2;
            }
        }
    }
</script>

<style scoped>
    .paper-box{
        width: 100%;
        height: 100%;
        background-color: #f5f5f8;
        position: relative;
    }
    .paper-title{
        width: 100%;
        height: 2rem;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
    }
    .paper-back{
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .paper-back img{
        width: 1.5rem;
    }
    .paper-time{
        font-size: 0.7rem;
    }
    .paper-list{
        font-size: 0.7rem;
        margin-right: 0.5rem;
    }
    .paper-content{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 2rem 0 3rem 0;
    }
    .paper-btn{
        width: 100%;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        position: absolute;
        bottom: 0;
    }
    .paper-btn button{
        width: 10rem;
        height: 2rem;
        border: 0;
        color: white;
    }
    .paper-btn .paper-next-btn{
        background: url("../../../static/img/paper-next.png");
        background-size: 100% 100%;
    }
    .paper-btn .paper-no-next-btn{
        background: url("../../../static/img/paper-no-next.png");
        background-size: 100% 100%;
    }
</style>