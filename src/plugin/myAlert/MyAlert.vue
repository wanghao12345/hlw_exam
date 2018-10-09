<template>
    <div class="my-alert" v-show="show">
        <div class="my-alert-box">
            <div class="msg">{{msg}}</div>
            <div class="button">
                <button class="query" @click="handleClickQuery">确定</button>
                <button class="cancer" @click="handleClickCancer">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyAlert",
        data () {
            return {
                show: false,
                msg: '',
                queryCallback: function () {},
                cancerCallback: function () {}
            }
        },
        methods: {
            /**
             * 确定
             */
            handleClickQuery () {
                this.show = false;
                this.queryCallback();
            },
            /**
             * 取消
             */
            handleClickCancer () {
                this.show = false;
                this.cancerCallback();
            }
        }
    }
</script>

<style scoped>
    .my-alert{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
    }
    .my-alert-box{
        width: 14rem;
        background: white;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
    }
    .msg{
        width: 100%;
        min-height: 2rem;
        text-align: center;
        line-height: 1rem;
        font-size: 0.7rem;
        box-sizing: border-box;
        padding: 0.6rem;
        color: #909090;
    }
    .button{
        width: 100%;
        height: 2.5rem;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #ececec;
    }
    .button button{
        width: 4rem;
        height: 1.5rem;
        background: #03A9F4;
        border: 0;
        margin: 0 0.5rem;
        border-radius: 0.2rem;
        color: white;
    }
    .button button.cancer{
        background: #FF9800;
    }
</style>