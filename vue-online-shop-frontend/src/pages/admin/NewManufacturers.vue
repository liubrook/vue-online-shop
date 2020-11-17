<template>

</template>

<script>
import ManufacturerForm from '@/components/ManufacturerForm'
export default {
  components: {
    'manufacturer-form': ManufacturerForm
  },
  computed: {
    model() {
      return {}
    }
  },
  methods: {
    addManufacturer(model) {
      this.$store.dispatch('addManufacturer', {
        manufacturer: model
      })
    }
  }
}
</script>
