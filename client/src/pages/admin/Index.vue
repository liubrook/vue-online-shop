<template>
  <div>
    <app-header :activeIndex="activeIndex"></app-header>
    <div class="admin-new">
      <div class="container">
        <h1>后台管理</h1>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
export default {
  name: "home",
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('token')
    if (!token) {
      next('/user/login')
    } else {
      next()
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      activeIndex: "2"
    };
  },
  components: {
    "app-header": Header
  }
}
</script>
