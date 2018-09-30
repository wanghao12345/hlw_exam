<template>
    <div class="single-box">
        <div class="title-box">
            <span class="title-type">多选题</span>
            <span class="title-text">1.测试题赐额是大家看法的接口JFK的健康<i>(2分)</i></span>
        </div>
        <div class="title-content">
            <ul>
                <li v-for="(item, index) in multiPaperData">
                    <span @click="handleClickSelect(index)" class="icon">
                        <img v-show="!PaperMultiStatus[index].status" src="../../../../static/img/select-icon.png" alt="选择">
                        <img v-show="PaperMultiStatus[index].status" src="../../../../static/img/selected-icon.png" alt="选择">
                    </span>
                    <span class="single-text">{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaperMulti",
        props: {
            multiPaperData: Array,
            required: true
        },
        data () {
            return {
                //控制单选
                PaperMultiStatus: [
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
                ]
            }
        },
        methods: {
            /**
             * 选择
             */
            handleClickSelect (index) {
                this.PaperMultiStatus[index].status = !this.PaperMultiStatus[index].status;
                for (var i = 0; i < this.PaperMultiStatus.length; i++){
                    if(this.PaperMultiStatus[i].status){
                        this.$emit('childNextPaper', true);
                        return;
                    }
                }
                this.$emit('childNextPaper', false);
            },
            /**
             * 接受父组件事件
             */
            parentResetMulti (reset) {
                this.PaperMultiStatus = [
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
                ];
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/styles/css/paper/paper.css";
</style>