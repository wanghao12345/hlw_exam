<template>
    <div id="app" class="app-box">
        <router-view></router-view>
    </div>
</template>

<script>
    import {setStore, getStore, setCookie} from '@/config/localStorage'
    export default {
        name: "App",
        data(){
            return{

            }
        },
        mounted(){
            let token = getStore('token');
            console.log('token:'+token);
            if(token === null || token ==="" || token === undefined){
                var _this = this;
                let id = getStore('examId');

                if(id === null || id ==="" || id === undefined){
                    this.$myAlertOpen('请扫码进入该考试系统！', function () {
                        _this.$router.push('/login/'+id);
                    }, function () {
                        _this.$router.push('/login/'+id);
                    });
                }else{
                    this.$myAlertOpen('您还没有登录，请先登录！', function () {
                        _this.$router.push('/login/'+id);
                    }, function () {
                        _this.$router.push('/login/'+id);
                    });
                }
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .app-box{
        width: 100%;
        height: 100%;
    }
</style>