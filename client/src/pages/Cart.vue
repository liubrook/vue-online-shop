
<template>
  <div>
    <app-header :activeIndex="activeIndex"></app-header>
    <div class="container">
      <h1>{{msg}}</h1>
    </div>
     <product-item :products="cart"></product-item>
  </div>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue'
import Header from "@/components/Header.vue"
  export default {
    components: {
      'product-item': ProductItem,
      "app-header": Header
    },
    name: 'home',
    beforeRouteEnter (to, from, next) {
      const token = localStorage.getItem('token')
      if (!token) {
        next('/user/login')
      } else {
        next()
      }
    },
    data () {
      return {
        msg: 'Welcome to the Cart Page',
        activeIndex: "3"
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart
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
