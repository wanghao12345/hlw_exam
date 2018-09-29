<template>
    <div class="single-box">
        <div class="title-box">
            <span class="title-type">单选题</span>
            <span class="title-text">1.测试题赐额是大家看法的接口JFK的健康<i>(2分)</i></span>
        </div>
        <div class="title-content">
            <ul>
                <li v-for="(item, index) in PaperData">
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
            PaperData: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        data () {
            return {
                // PaperData: [
                //     {
                //     'name': 'A.功能升高或兴奋'
                //     },{
                //         'name': 'B.功能降低功能降低或抑制功能降低或抑制功能降低或抑制功能降低或抑制功能降低或抑制或抑制'
                //     },{
                //         'name': 'C.兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制兴奋或抑制'
                //     },{
                //         'name': 'D.产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能产生新的功能'
                //     }
                // ],
                //控制单选
                PaperSingleStatus: [
                    {
                        'name': 'A',
                        'status': true
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
            }
        },
        watch: {
            PaperData(val, oldVal){
                console.log("a: " + val, oldVal)
            }
        }
    }
</script>

<style scoped>
    .single-box{
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .title-box{
        width: 100%;
        padding: 1rem 0.5rem 2rem 0.5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .title-box span{
        font-size: 0.8rem;
        display: block;
        line-height: 1.2rem;
    }
    .title-type{
        width: 3rem;
        height: 0.8rem;
        font-size: 0.6rem !important;
        border: 1px solid #3daff0;
        color: #3daff0;
        border-radius: 5px;
        text-align: center;
        line-height: 0.8rem !important;
        margin-right: 0.5rem;
        margin-top: 0.2rem;
    }
    .title-text{
        width: 12rem;
    }
    .title-text i{
        font-style: normal;
        font-size: 0.7rem;
        color: #3baced;
    }
    .title-content{
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.5rem;
    }
    .title -content ul{

    }
    .title-content ul li{
        display: flex;
        justify-content: flex-start;
        line-height: 1rem;
        margin-bottom: 0.5rem;
        min-height: 1.8rem;
    }
    .title-content ul li span{

    }
    .title-content ul li span.icon{
        width: 3rem;
        text-align: center;
    }
    .title-content ul li span.icon img{
        width: 1.5rem;
    }
    .title-content ul li span.single-text{
        font-size: 0.8rem;
        line-height: 1.4rem;
        width: 12rem;
    }
</style>






























