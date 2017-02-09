<template lang="pug">
div#signin
  el-card#signin-form-holder
    div(slot="header")
      img#logo(src="../../assets/logo.png")
    el-form#signin-form(:model="form", ref="form")
      el-form-item(prop="username", :rules="[{ required: true, message: '请输入用户名' }]")
        el-input(v-model="form.username", placeholder="用户名")
      el-form-item(prop="password", :rules="[{ required: true, message: '请输入用户名' }]")
        el-input(type="password", v-model="form.password", placeholder="密码")
      el-form-item
        el-row(:gutter="25")
          el-col(:span="12")
            el-button(type="primary", @click="signin('form')") 登陆
          el-col(:span="12")
            el-button(@click="reset('form')") 重置
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      form: {
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
          this.$router.replace('/main/interaction')
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
#signin
  width: 100%
  height: 100%
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  background-image: url(../../assets/signin-bg.jpg)
  background-size: 100% 100%
  background-attachment: fixed
  #signin-form-holder
    width: 500px
    margin: 0 calc(50% - 250px)
    #logo
      width: 100%
    #signin-form
      .el-button
        width: 100%
</style>