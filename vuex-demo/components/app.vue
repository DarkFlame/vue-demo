<template>
    <div id="app1">
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

export default {
  components: { ProductList, Cart }
}
</script>