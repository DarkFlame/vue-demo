<template>
    <div id="app">
        <router-link to="/login">登陆</router-link>
        <router-view></router-view>
    </div>
</template>
<style>
    body{
        background-color:green;
    }
</style>
<script>
    import {routerView,routerLink} from 'vue-router'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }

    }


</script>
