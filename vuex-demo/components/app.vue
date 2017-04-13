<template>
    <div id="app1">

        <product-list></product-list>
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