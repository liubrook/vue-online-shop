<template>

</template>

<script>
import ManufacturerForm from '@/components/ManufacturerForm'
export default {
  components: {
    'manufacturer-form': ManufacturerForm
  },
  created() {
    this.$store.dispatch('manufacturerById', {
      manufacturerId: this.$route.params['id']
    })
  },
  computed: {
    model () {
      const manufacturer = this.$store.getters.manufacturerById(this.$route.params['id'])

      // 这里返回product的拷贝，是为了在修改product的拷贝之后，在保存之前不修改本地Vuex stire的product属性
      return { ...manufacturer }
    }
  },
  methods: {
    addManufacturer(model) {
      this.$store.dispatch('updateManufacturer', {
        manufacturer: model
      })
    }
  }
}
</script>

<style>

</style>
