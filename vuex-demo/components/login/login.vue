<docs name="1">
    ## This is an login mmd
</docs>

<template lang="pug">
    div
        router-link(to="/") 返回
        input(v-model="msg")
</template>

<style src="bootstrap/less/test.less" lang="less"></style>

<script>
import {routerView,routerLink} from 'vue-router'
    export default{
        data(){
            return {}
        },
        computed:{
            msg:{
                get(){
                    return this.$store.state.login.msg
                },
                set(val){
                    this.$store.dispatch('setMsg',val)
                }
            }
        }

    }

</script>
