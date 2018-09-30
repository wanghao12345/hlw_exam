<template>
    <div class="single-box">
        <div class="title-box">
            <span class="title-type">判断题</span>
            <span class="title-text">1.测试题赐额是大家看法的接口JFK的健康<i>(2分)</i></span>
        </div>
        <div class="title-content">
            <ul>
                <li v-for="(item, index) in judgmentPaperData">
                    <span @click="handleClickSelect(index)" class="icon">
                        <img v-show="!PaperJudgmentStatus[index].status" src="../../../../static/img/select-icon.png" alt="选择">
                        <img v-show="PaperJudgmentStatus[index].status" src="../../../../static/img/selected-icon.png" alt="选择">
                    </span>
                    <span class="single-text">{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaperJudgment",
        data () {
            return {
                judgmentPaperData: [
                    {
                        'name': '正确'
                    },
                    {
                        'name': '错误'
                    }
                ],
                //控制单选
                PaperJudgmentStatus: [
                    {
                        'name': 'true',
                        'status': false
                    },
                    {
                        'name': 'false',
                        'status': false
                    }
                ]
            }
        },
        methods: {
            /**
             * 选择
             */
            handleClickSelect (index) {
                this.PaperJudgmentStatus[index].status = !this.PaperJudgmentStatus[index].status;
                for (var i = 0; i < this.PaperJudgmentStatus.length; i++){
                    if(i != index){
                        this.PaperJudgmentStatus[i].status = false;
                    }
                }
                if(this.PaperJudgmentStatus[index].status){
                    this.$emit('childNextPaper', true);
                }else{
                    this.$emit('childNextPaper', false);
                }
            },
            /**
             * 接受父组件事件
             */
            parentResetJudgment () {
                this.PaperJudgmentStatus = [
                    {
                        'name': 'true',
                        'status': false
                    },
                    {
                        'name': 'false',
                        'status': false
                    }
                ];
            }
        }
    }
</script>

<style scoped>

</style>