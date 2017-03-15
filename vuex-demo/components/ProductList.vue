<template>
    <ul>
        <li v-for="p in products">
            {{ p.title }} - {{ p.price | currency }}
            <br>
            <button
                    :disabled="!p.inventory"
                    @click="addToCartTest(p)">
                Add to cart
            </button>
        </li>
        <li><button

                @click="test(1)">
            test
        </button></li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions(
    {
    'addToCartTest':'addToCart',
    'test':'test'
    }
  ),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}

</script>
