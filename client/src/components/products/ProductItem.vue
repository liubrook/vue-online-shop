<template>
  <div class="products">
    <el-table class="table" :data="products">
      <el-table-column prop="name" label="产品名称" width="180" slot=""></el-table-column>
      <el-table-column prop="description" label="介绍" width="180" slot=""></el-table-column>
      <el-table-column prop="price" label="价格" width="180" slot=""></el-table-column>
      <el-table-column prop="manufacturer.name" label="生产厂商" width="180" slot=""></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
        <product-button :id="scope.row._id"></product-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ProductButton from './ProductButton.vue'
export default {
  name: 'product-item',
  props: ['products'],
  components: {
    'product-button': ProductButton
  }

}
</script>

<style>
.products{
  padding-top: 10px;
  text-align: center;
}
.table{
  margin: 0 auto;
  width: 900px;
}
.el-table .cell{
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
