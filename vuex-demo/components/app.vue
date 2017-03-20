<template>
    <div id="app1">
        <router-link to="/login">{{mymsg}}</router-link>
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <h2></h2>
        <product-list></product-list>
        <hr>
        <cart></cart>
    </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
import {mapGetters} from 'vuex'
import {routerView,routerLink} from 'vue-router'
export default {
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters({
                mymsg : 'msg'
            })
        },
       components: { ProductList, Cart }
}


</script>