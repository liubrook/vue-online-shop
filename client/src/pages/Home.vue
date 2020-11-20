
<template>
  <div>
    <app-header :activeIndex="activeIndex"></app-header>
    <div class="container">
      <h1>In Stock</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList'
import Header from "@/components/Header.vue";
  export default {
    name: 'home',
    components: {
      'product-list': ProductList,
      "app-header": Header
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeIndex: "1"
      };
    },
  }
</script>
