<template>
    <div class="result-box" :class="{'result-good-box' : resultStatus, 'result-bad-box' : !resultStatus}">
        <div class="result-top">
            <router-link to="/home" tag="div" class="result-back">
                <img src="../../../static/img/result-back.png" alt="返回">
            </router-link>
            <div class="score-box">
                <canvas id="score-canvas" width="1688" height="1688"></canvas>
            </div>
            <div class="result-content">
                <ul>
                    <li>
                        <div class="title">考试名称</div>
                        <div class="content">{{examTitle}}</div>
                    </li>
                    <li>
                        <div class="title">试卷总分</div>
                        <div class="content">{{paperTotalScore}}分</div>
                    </li>
                    <li>
                        <div class="title">合格分数线</div>
                        <div class="content">{{paperPassScore}}分</div>
                    </li>

                </ul>
            </div>
        </div>
        <div class="result-bottom">
            <div class="btn-div">
                <router-link
                    to="/paper"
                    tag="button"
                    class="onceMore"
                    :class="{'onceMore' : resultStatus, 'noonceMore' : !resultStatus}"
                >再考一次</router-link >
            </div>
            <div class="btn-div">
                <router-link to="/home" tag="button" class="goHome">返回首页</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextResult",
        data () {
            return {
                resultStatus: false,
                //试卷总分
                paperTotalScore: 100,
                //试卷合格分数
                paperPassScore: 60,
                //试卷获得分数
                paperGetScore: 0,
                //考试题目
                examTitle: '公务员诚信培训在线考试'
            }
        },
        mounted () {
            this.$loadingClose();

            this.paperTotalScore = this.$route.params.totalScore;
            this.paperPassScore = this.$route.params.passScore;
            this.paperGetScore = this.$route.params.score;

            if(this.paperGetScore >= this.paperPassScore){
                this.resultStatus = true;
            }else{
                this.resultStatus = false;
            }

            this.examTitle = this.$route.params.examTitle;
            var time_canvas = document.getElementById("score-canvas");
            this.drawMain(time_canvas, this.paperGetScore, "#ffffff", "#e8e8e8", this.resultStatus);
            // this.drawMain(time_canvas, this.paperGetScore, "#ffffff", "#ffffff", this.resultStatus);
        },
        methods: {
            drawMain(drawing_elem, percent, forecolor, bgcolor, isGood){
                /*
                @drawing_elem: 绘制对象
                @percent：绘制圆环百分比, 范围[0, 100]
                @forecolor: 绘制圆环的前景色，颜色代码
                @bgcolor: 绘制圆环的背景色，颜色代码
                */
                var context = drawing_elem.getContext("2d");
                console.log(document.getElementById("score-canvas").clientWidth);
                var center_x = drawing_elem.width / 2;
                var center_y = drawing_elem.height / 2;
                var rad = Math.PI*2/100;
                var speed = 0;

                // 绘制背景圆圈
                function backgroundCircle(){
                    context.save();
                    context.beginPath();
                    // context.lineWidth = 7; //设置线宽
                    context.lineWidth = 50; //设置线宽
                    context.globalAlpha = 0.2;
                    var radius = center_x - context.lineWidth;
                    context.lineCap = "round";
                    context.strokeStyle = bgcolor;
                    context.arc(center_x, center_y, radius, 0, Math.PI*2, false);
                    context.stroke();
                    context.closePath();
                    context.restore();
                }
                //绘制运动圆环
                function foregroundCircle(n){
                    context.save();
                    context.strokeStyle = forecolor;
                    // context.lineWidth = 7;
                    context.lineWidth = 50;
                    context.globalAlpha = 0.7;
                    context.lineCap = "round";
                    var radius = center_x - context.lineWidth;
                    context.beginPath();
                    //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                    context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +n*rad, false);
                    context.stroke();
                    context.closePath();
                    context.restore();
                }

                //绘制文字
                function text(n, isGood){
                    context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
                    context.fillStyle = forecolor;
                    // var font_size = 15;
                    var font_size = 150;
                    context.font = font_size + "px Helvetica";
                    var text_width1 = context.measureText('本次考试得分').width;
                    // context.fillText('本次考试得分',center_x-text_width1/2, center_y + font_size/2 - 30);
                    context.fillText('本次考试得分',center_x-text_width1/2, center_y + font_size/2 - 280);

                    // font_size = 30;
                    font_size = 300;
                    context.font = font_size + "px Helvetica";
                    var text_width = context.measureText(n.toFixed(0)).width;
                    context.fillText(n.toFixed(0), center_x-text_width/2, center_y + font_size/2);

                    font_size = 150;
                    // font_size = 15;
                    context.font = font_size + "px Helvetica";
                    var text_width1 = context.measureText(isGood).width;
                    // context.fillText(isGood,center_x-text_width1/2, center_y + font_size/2 + 30);
                    context.fillText(isGood,center_x-text_width1/2, center_y + font_size/2 + 300);
                    context.restore();
                }
                //执行动画
                (function drawFrame(){
                    window.requestAnimationFrame(drawFrame);
                    context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
                    backgroundCircle();
                    if(isGood){
                        text(speed, '合格');
                    }else{
                        text(speed, '不合格');
                    }
                    foregroundCircle(speed);
                    if(speed >= percent) return;
                    speed += 1;
                }());
            }
        }
    }
</script>

<style scoped>
    .result-box{
        width: 100%;
        height: 100%;
    }
    .result-good-box{
        background: url("../../../static/img/result-good-bg.png") no-repeat;
        background-size: 100% 80%;
    }
    .result-bad-box{
        background: url("../../../static/img/result-bad-bg.png") no-repeat;
        background-size: 100% 80%;
    }
    .result-top{
        width: 100%;
        height: 80%;
    }
    .result-back{
        width: 100%;
        height: 2rem;
    }
    .score-box{
        width: 100%;
        height: 9rem;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .score-box #score-canvas{
        width: 9rem;
        height: 9rem;
    }
    .result-content{
        width: 100%;
    }
    .result-content ul{
        margin-top: 1rem;
    }
    .result-content ul li{
        width: 100%;
        height: 2rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        line-height: 3rem;
        color: white;
        box-sizing: border-box;
        padding: 0 0.5rem;
    }
    .result-content ul li div{
        font-size: 0.7rem;
    }
    .result-content ul li div.title{

    }
    .result-content ul li div.content{

    }
    .result-back img{
        width: 1.2rem;
        margin: 0.5rem;
    }

    .result-bottom{
        width: 100%;
        height: 20%;
        text-align: center;
    }
    .result-bottom button{
        width: 12rem;
        height: 2.5rem;
        border: 0;
        color: white;
        font-size: 0.8rem;
        line-height: 2.4rem;
        position: relative;
    }
    .btn-div{
        width: 100%;
        height: 2.5rem;
    }
    .result-bottom button:active{
        width: 11.8rem;
        height: 2.3rem;
        top: 0.1rem;
    }
    button.onceMore{
        background: url("../../../static/img/result-good-btn.png");
        background-size: 100% 100%;
    }

    button.noonceMore{
        background: url("../../../static/img/result-bad-btn.png");
        background-size: 100% 100%;
    }
    button.goHome{
        background: url("../../../static/img/paper-no-next.png");
        background-size: 100% 100%;
        color: #333;;
    }



</style>