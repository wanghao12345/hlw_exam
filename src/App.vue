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