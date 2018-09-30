<template>
    <div class="single-box">
        <div class="title-box">
            <span class="title-type">单选题</span>
            <span class="title-text">1.测试题赐额是大家看法的接口JFK的健康<i>(2分)</i></span>
        </div>
        <div class="title-content">
            <ul>
                <li v-for="(item, index) in singlePaperData">
                    <span @click="handleClickSelect(index)" class="icon">
                        <img v-show="!PaperSingleStatus[index].status" src="../../../../static/img/select-icon.png" alt="选择">
                        <img v-show="PaperSingleStatus[index].status" src="../../../../static/img/selected-icon.png" alt="选择">
                    </span>
                    <span class="single-text">{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaperSingle",
        props: {
            singlePaperData: Array,
            required: true
        },
        data () {
            return {
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
                ]
            }
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
                    this.$emit('childNextPaper', true);
                }else{
                    this.$emit('childNextPaper', false);
                }
            },
            /**
             * 接受父组件事件
             */
            parentResetSingle () {
                this.PaperSingleStatus = [
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






























