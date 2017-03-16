<template>
    <div>
        <router-link to="/">返回</router-link>
        <input v-model="msg">
    </div>
</template>
<style>


</style>
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
