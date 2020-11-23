<template>
  <AuthingGuard :userPoolId="userPoolId" :config="config" @login="handleLogin" />
</template>

<script>
import { AuthingGuard } from '@authing/vue-ui-components'
// 引入 css 文件
import '@authing/vue-ui-components/lib/index.min.css'
export default {
  components: {
    AuthingGuard
  },
  data() {
    return {
      model: { manufacturer: { name: '', _id: '' } },
      userPoolId: '',
      config: {}
    }
  },
  created() {
    this.userPoolId = this.$store.state.userPoolId
    this.config = {
      logo: 'https://files.authing.co/user-contents/photos/a718f7f8-a427-438d-950a-41a496c30444.png',
      title: '1024肥宅迷你电商',
      mode: 'normal'
    }
  },
  mounted() {

  },
  methods: {
    // 登录成功
    handleLogin(user, authClient) {
      this.$store.commit("SET_USER", user);
      localStorage.setItem("token", JSON.stringify(user.token));
      localStorage.setItem("vue-online-shop-userInfo", JSON.stringify(user));
      this.$router.push("/");
    }
  }
}
</script>

<style>
.user-title:hover {
  cursor: pointer;
}
</style>
