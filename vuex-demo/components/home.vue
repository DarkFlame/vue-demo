<template>
    <div id="app">
        <el-menu theme="dark" default-active="/tableNav/table" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">

            <el-submenu index="1">
                <template slot="title">
                    ADMIN
                </template>
                <el-menu-item index="/">
                     首页
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/login">
                登陆
            </el-menu-item>
            <el-menu-item index="/tableNav/table">
                订单管理
            </el-menu-item>
        </el-menu>

        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    body {
        /*background-color: blueviolet;*/
    }

    .el-menu-item {
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-underline: none;
            text-decoration: none;
        }
    }
    #app{
        height: 100%;
    }

    body, div {
        margin: 0;
        padding: 0;
    }


</style>

<script>
    import {routerView} from 'vue-router'
    export default{
        methods: {
            handleSelect(){
//                console.log(arguments)
            }
        }
    }
</script>
