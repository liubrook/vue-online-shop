<template>
  <div id="login-form"></div>
</template>

<script>
export default {
  data() {
    return {
      model: { manufacturer: { name: '', _id: '' } }
    }
  },
  mounted() {
    console.log('进来了')
    const appId = '5fb76588272b29c9e3913506'
    const userPoolId = '5fb76587b699513f3171b0f1'
    const domain = 'https://vue-online-shop-test.authing.cn'

    const form = new Guard(userPoolId, {
      logo: 'https://files.authing.co/user-contents/photos/a718f7f8-a427-438d-950a-41a496c30444.png',
      title: '迷你电商',
      mountId: 'login-form',
      hideClose: true
    })
    console.log('123', form)
    const that = this

    form.on('authenticated', userInfo => {
      console.log('userInfo', userInfo)
      that.$store.commit('SET_USER', userInfo)
      localStorage.setItem('token', JSON.stringify(userInfo.token))
      localStorage.setItem('vue-online-shop-userInfo', JSON.stringify(userInfo))

      that.$route.push('/')
    })
  },
}
</script>

<style>

</style>
