<template>
    <div class="paper-box">
        <div class="paper-title">
            <router-link to="/home" tag="div" class="paper-back">
                <img src="../../../static/img/paper-back.png" alt="返回">
            </router-link>
            <div class="paper-time">{{SurplusTime}}</div>
            <div class="paper-list">{{currentPaper}}/{{sumPaper}}</div>
        </div>
        <div class="paper-content">
            <div class="single-box">
                <div class="title-box">
                    <span class="title-type">{{paperType}}</span>
                    <span class="title-text">{{paperTitle}}<i>({{paperCore}}分)</i></span>
                </div>
                <div class="title-content">
                    <ul>
                        <li v-for="(item, index) in singlePaperData">
                    <span @click="handleClickSelect(index)" class="icon">
                        <img v-show="!PaperSingleStatus[index].status" src="../../../static/img/select-icon.png" alt="选择">
                        <img v-show="PaperSingleStatus[index].status" src="../../../static/img/selected-icon.png" alt="选择">
                    </span>
                            <span class="single-text">{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="paper-btn">
            <button v-show="isNextPaper" @click="handleNextPaper" class="paper-next-btn">{{isNextPaperText}}</button>
            <button v-show="!isNextPaper" class="paper-no-next-btn">{{isNextPaperText}}</button>
        </div>
    </div>
</template>

<script>
    import {getCurExam, submitExam} from '@/service/getData'
    export default {
        name: "Paper",
        components: {

        },
        data () {
            return {
                //考试名称
                examTitle: '',
                // 倒计时
                SurplusTime: '',
                // 做题进度
                testProgress: '',
                // 题目ids
                paperId: '',
                // 题目类型
                paperType: '单选题',
                // 题目标题
                paperTitle: '测试标题',
                // 题目分数
                paperCore: 2,
                // 是否进入下一题
                isNextPaper: false,
                // 下一题按钮文字
                isNextPaperText: '下一题',
                //控制单选
                PaperSingleStatus: [
                    {
                        'name': 'A',
                        'status': false
                    },
                    {
                        'name': 'B',
                        'status': false
                    },
                    {
                        'name': 'C',
                        'status': false
                    },
                    {
                        'name': 'D',
                        'status': false
                    }
                ],
                //存储题目选项
                singlePaperData: [],
                //所有题目
                paperConfigData: [],
                //当前所做的题目
                currentPaper: 1,
                //当前所做的题目ID
                currentPaperId: null,
                //总的题目数
                sumPaper: 0,
                //答案
                answerData: [],
                //题目ids
                answerIdData: [],
                //答题开始时间
                startExamTime: ''
            }
        },
        mounted () {
            this.$loadingOpen();
            this.getExamPaper();
            this.getStartExamTime();
        },
        methods: {
            /**
             * 选择
             */
            handleClickSelect (index) {
                this.PaperSingleStatus[index].status = !this.PaperSingleStatus[index].status;
                for (var i = 0; i < this.PaperSingleStatus.length; i++){
                    if(i != index){
                        this.PaperSingleStatus[i].status = false;
                    }
                }
                if(this.PaperSingleStatus[index].status){
                    this.isNextPaper = true;
                }else{
                    this.isNextPaper = false;
                }
            },
            /**
             * 获取下一题
             */
            handleNextPaper () {
                let _this = this;
                this.currentPaper = this.currentPaper + 1;
                this.getPaperAnswer();
                if(this.currentPaper > this.sumPaper){ //提交答案
                    this.$myAlertOpen('确定交卷吗？', function () {
                        _this.submitAnswerRequest();
                    }, function () {

                    });
                }else{
                    if(this.currentPaper === this.sumPaper){
                        this.isNextPaperText = '提交试卷';
                    }else{
                        this.isNextPaperText = '下一题';
                    }

                    // this.isNextPaper = false;
                    for (var i = 0; i < this.PaperSingleStatus.length; i++){
                        this.PaperSingleStatus[i].status = false;
                    }
                    this.getCurrentPaperData ();
                }
            },
            /**
             * 获取考试题目
             */
            async getExamPaper () {
                let _this = this;
                let res = await getCurExam();
                console.log(res);
                if(res.code==='10'){
                    let data = res.data;
                    this.countDownTime(parseInt(data.limitTime));
                    this.sumPaper = data.questionNumber;
                    this.paperConfigData = res.data.paperConfig;
                    this.paperId = res.data.id;
                    this.examTitle = res.data.examName;
                    this.getCurrentPaperData();

                }else{

                    if(res.code === "-50"){
                        this.$myAlertOpen(res.msg, function () {
                            _this.$router.push('/login');
                        }, function () {
                            _this.$router.push('/login');
                        });
                    }else{
                        this.$myAlertOpen(res.msg, function () {
                            _this.$router.push('/home');
                        }, function () {
                            _this.$router.push('/home');
                        });
                    }
                }
                this.$loadingClose();
            },
            /**
             * 倒计时
             */
            countDownTime (time) {
                let limitTime = time -1;
                let oneMinute = 59;
                this.SurplusTime = (limitTime < 10 ? '0'+ limitTime : limitTime)+ ':' + (oneMinute < 10 ? '0' + oneMinute : oneMinute );
                let t = window.setInterval(function () {
                    oneMinute -= 1;
                    if(oneMinute < 0){
                        oneMinute = 59;
                        limitTime -= 1;
                    }
                    if (limitTime == 0 && oneMinute == 0){
                        window.clearInterval(t);
                        this.submitAnswerRequest();
                    }
                    this.SurplusTime = (limitTime < 10 ? '0'+ limitTime : limitTime)+ ':' + (oneMinute < 10 ? '0' + oneMinute : oneMinute );

                }.bind(this), 1000)
            },
            /**
             * 获取当前所要做的题目
             */
            getCurrentPaperData () {
                var singleElectNum = this.paperConfigData[0].subCount;
                var judgeNum = this.paperConfigData[1].subCount;
                if(this.currentPaper <= singleElectNum){ //选择题
                    this.singlePaperData = [];

                    this.paperType = '单选题';
                    this.paperTitle = this.paperConfigData[0].questions[this.currentPaper - 1].title;
                    this.currentPaperId = this.paperConfigData[0].questions[this.currentPaper - 1].id;
                    this.paperCore = this.paperConfigData[0].questions[this.currentPaper - 1].score;

                    this.singlePaperData.push({'name': this.paperConfigData[0].questions[this.currentPaper -1].optionA});
                    this.singlePaperData.push({'name': this.paperConfigData[0].questions[this.currentPaper -1].optionB});
                    this.singlePaperData.push({'name': this.paperConfigData[0].questions[this.currentPaper -1].optionC});
                    this.singlePaperData.push({'name': this.paperConfigData[0].questions[this.currentPaper -1].optionD});
                }
                if(this.currentPaper > singleElectNum && this.currentPaper <= (singleElectNum + judgeNum)){ //判断题
                    this.singlePaperData = [];

                    this.paperType = '判断题';
                    this.paperTitle = this.paperConfigData[1].questions[this.currentPaper - singleElectNum -1].title;
                    this.currentPaperId = this.paperConfigData[1].questions[this.currentPaper - singleElectNum -1].id;
                    this.paperCore = this.paperConfigData[1].questions[this.currentPaper - singleElectNum - 1].score;

                    this.singlePaperData.push({'name': '正确'});
                    this.singlePaperData.push({'name': '错误'});
                }
                if(this.currentPaper > (singleElectNum + judgeNum)){ // 做完

                }
            },
            /**
             * 获取答案
             */
            getPaperAnswer () {
                for (var i = 0; i < this.PaperSingleStatus.length; i++){
                    if(this.PaperSingleStatus[i].status && this.paperType === '单选题'){
                        switch (i) {
                            case 0:
                                this.answerData.push('A')
                                break;
                            case 1:
                                this.answerData.push('B')
                                break;
                            case 2:
                                this.answerData.push('C')
                                break;
                            case 3:
                                this.answerData.push('D')
                                break;
                        }
                        this.answerIdData.push(this.currentPaperId);
                    }
                    if(this.PaperSingleStatus[i].status && this.paperType === '判断题'){
                        switch (i) {
                            case 0:
                                this.answerData.push('T')
                                break;
                            case 1:
                                this.answerData.push('F')
                                break;
                        }
                        this.answerIdData.push(this.currentPaperId);
                    }
                }
            },
            /**
             * 获取开始答题时间
             */
            getStartExamTime () {
                let date = new Date();
                this.startExamTime = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
                this.startExamTime += ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            },

            /**
             * 提交答案
             */
            async submitAnswerRequest () {
                let _this = this;
                let res = await submitExam(this.paperId, this.answerIdData, this.answerData, this.startExamTime);
                if(res.code === '10'){
                    let data = res.data;
                    let score = data.score;
                    let passScore = data.passScore;
                    let totalScore = data.totalScore;
                    _this.$router.push({
                        name: 'Result',
                        params: {
                            score: score,
                            passScore: passScore,
                            totalScore: totalScore,
                            examTitle: _this.examTitle
                        }
                    });
                }else{

                    if(res.code === "-50"){
                        this.$myAlertOpen(res.msg, function () {
                            _this.$router.push('/login');
                        }, function () {
                            _this.$router.push('/login');
                        });
                    }else{
                        this.$myAlertOpen(res.msg, function () {
                            _this.$router.push('/home');
                        }, function () {
                            _this.$router.push('/home');
                        });
                    }
                }
                console.log(res);
            }


        }
    }
</script>

<style scoped>
    @import "../../assets/styles/css/paper/paper.css";
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
    .paper-btn .paper-next-btn:active{
        top: 0.1rem;
        width: 9.8rem;
        height: 1.8rem;
    }

    .paper-btn .paper-no-next-btn{
        background: url("../../../static/img/paper-no-next.png");
        background-size: 100% 100%;
    }





</style>