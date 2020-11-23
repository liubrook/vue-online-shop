<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { AuthenticationClient } from 'authing-js-sdk'
export default {
  name: 'App',
  mounted() {
    this.checkLogin()
  },
  methods: {
    async checkLogin() {
      const token = localStorage.getItem('token')

      if (token) {
        const userPoolId = this.$store.state.userPoolId

        const authing = new AuthenticationClient({
          userPoolId
        })
        const result = await authing.checkLoginStatus(JSON.parse(token))

        if (result.status) {
          const userInfo = localStorage.getItem('vue-online-shop-userInfo')

          if (userInfo) {
            this.$store.commit('SET_USER', JSON.parse(userInfo))
          }
        } else {
          localStorage.removeItem('token')
          localStorage.removeItem('vue-online-shop-userInfo')
        }
      } else {
        this.$router.push('/user/login')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-submenu_title {
  margin-left: 40px;
}
</style>
