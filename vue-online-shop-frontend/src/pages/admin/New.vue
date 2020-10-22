<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>
<script>
import ProductForm from '@/components/products/ProductForm.vue'
export default {
  components: {
    'product-form': ProductForm
  },
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung'
        },
        {
          id: 'apple',
          name: 'Apple'
        }
      ]
    }
  },
  methods: {
    addProduct(model) {
      console.log('model', model)
    }
  },
}
</script>