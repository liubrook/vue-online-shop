
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
     <product-item :products="cart"></product-item>
  </div>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue'
  export default {
  components: {
    'product-item': ProductItem
  },
    name: 'home',
    data () {
      return {
        msg: 'Welcome to the Cart Page'
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart
      }
    },
    methods: {
      removeFromCart(productId) {
        this.$store.commit('REMOVE_FROM_CART', {
          productId
        })
      }
    }
  }
</script>
<style>
.product{
  border-bottom: 1px solid black;
}
.product_image{
  width: 100px;
  height: 100px;
}
</style>
