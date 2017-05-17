<template lang="pug">
div#signin
  div#mask
    img#logo(src="../../assets/logo.png")
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
          window.location.replace('http://localhost:8082/management')
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
#signin, #mask
  position: relative
  height: 100%
  background-size: 100% 100%
#signin
  background-image: url(../../assets/signin-bg.jpg)
#mask
  background-image: url(../../assets/line.png)
  #logo
    width: 300px
    height: 70px
    position: absolute
    top: 80px
    left: 100px
    span
      display: block
    #logo-header
      font-size: 45px
  #signin-form
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    .el-form
      width: 400px
      margin: 0 calc(50% - 200px)
      .el-button
        width: 100%
</style>