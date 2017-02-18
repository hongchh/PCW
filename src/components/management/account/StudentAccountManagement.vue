<template lang="pug">
div#student-account-management
  el-row(:gutter="20")
    el-col(:span="14")
      el-card
        div.clearfix(slot="header")
          span.header-text 账号信息
          el-button(style="float: right;", type="primary") 保存
        el-form(ref="studentInfo", :model="studentInfo", label-width="120px")
          el-form-item(label="账号 :")
            el-input(value="student", :disabled="true")
          el-form-item(prop="password", label="密码 :", :rules="[{ required: true, message: '请输入密码' }]")
            el-input(type="password", v-model="studentInfo.password")
          el-form-item(prop="againPassword", label="重复密码 :", :rules="[{ required: true, message: '请确认密码' }]")
            el-input(type="password", v-model="studentInfo.againPassword")
    el-col(:span="10")
      el-card
        div.clearfix(slot="header")
          span.header-text 用户头像
        img.head-img(src="../../../assets/default-head-img.jpg")
        el-upload(action="//jsonplaceholder.typicode.com/posts/", :default-file-list="headImg")
          el-button(size="small", type="primary") 上传头像
          div.el-upload__tip(slot="tip") 只能上传jpg/png文件，且不超过500kb
</template>

<script>
export default {
  name: 'student-account-management',
  data () {
    return {
      studentInfo: {
        password: '23332333',
        againPassword: ''
      },
      headImg: [{
        name: 'default-head-img.jpg',
        url: '/assets/default-head-img.jpg'
      }]
    }
  }
}
</script>