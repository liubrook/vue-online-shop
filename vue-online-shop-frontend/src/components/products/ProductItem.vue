<template>
  <div>
    <div class="product">
      <p class="product_name">产品名称：{{product.name}}</p>
      <p class="product_description">介绍：{{product.description}}</p>
      <p class="product_price">价格：{{product.price}}</p>
      <p class="product_manufacturer">生产厂商：{{product.manufacturer.name}}</p>
      <img :src="product.image" alt="" class="product_image">
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton.vue'
export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton
  }

}
</script>

<style>

</style>
