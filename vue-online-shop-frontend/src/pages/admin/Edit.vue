<template>
  <div>
    <div class="title">
      <h1>This is Admin/Edit</h1>
    </div>
    <product-form @save-product="updateProduct" :model="model" :manufacturers="manufacturers" :isEditing="true"></product-form>
  </div>
</template>
<script>
import ProductForm from '@/components/products/ProductForm'
export default {
  created() {
    const { name } = this.model
    if (!name) {
      this.$store.dispatch('productId', {
        productId: this.$store.params['id']
      })
    }

    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers')
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers
    },
    model() {
      const product = this.$store.getters.productById(this.$route.params['id'])

      // 这里返回product的拷贝，是为了在修改product的拷贝之后，在保存之前不修改本地Vuex stire的product属性
      return { ...product, manufacturer: { ...product.manufacturer } }
    }
  },
  methods: {
    updateProduct(product) {
      this.$store.dispatch('updateProduct', {
        productId
      })
    }
  },
  components: {
    'product-form': ProductForm
  }
}
</script>
