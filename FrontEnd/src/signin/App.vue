<template lang="pug">
div#app
  div#mask
    div#logo
      img(src="../common/logo.gif")
    div#signin-form
      el-form(ref="account", :model="account")
        el-form-item(prop="username", :rules="[{ required: true, message: '请输入用户名' }]")
          el-input(v-model="account.username", placeholder="用户名")
        el-form-item(prop="password", :rules="[{ required: true, message: '请输入密码' }]")
          el-input(v-model="account.password", placeholder="密码", type="password")
        el-form-item
          el-row(:gutter="25")
            el-col(:span="12")
              el-button(type="primary", @click="signin('account')") 登陆
            el-col(:span="12")
              el-button(@click="reset('account')") 重置
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      account: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // TODO: 登录操作
          history.replaceState(null, document.title, '/management.html')
          location.reload()
        } else {
          return false
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  height: 100%
#app, #mask
  position: relative
  height: 100%
  background-size: 100% 100%
#app
  background-image: url(./assets/signin-bg.jpg)
#mask
  background-image: url(./assets/line.png)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  #logo
    width: 400px
    margin-bottom: 80px
    img
      width: 100%
      height: auto
  #signin-form
    .el-form
      width: 400px
      margin: 0 calc(50% - 200px)
      .el-button
        width: 100%
</style>
