<template lang="pug">
div#user-profile-management
  el-row(:gutter="20")
    el-col(:span="14")
      el-card
        div.clearfix(slot="header")
          span.header-text 基本信息
          el-button(style="float: right;", type="primary") 保存
        el-form(ref="basicInfo", :model="basicInfo", label-width="120px")
          el-form-item(prop="name", label="姓名 :", :rules="[{ required: true, message: '请输入姓名' }]")
            el-input(v-model="basicInfo.name")
          el-form-item(prop="title", label="职称 :", :rules="[{ required: true, message: '请输入职称' }]")
            el-input(v-model="basicInfo.title")
          el-form-item(prop="sex", label="性别 :", :rules="[{ required: true, message: '请选择性别' }]")
            el-select(v-model="basicInfo.sex")
              el-option(label="男", value="男")
              el-option(label="女", value="女")
          el-form-item(prop="role", label="角色 :")
            el-input(v-model="basicInfo.role", :disabled="true")
          el-form-item(prop="education", label="学历 :", :rules="[{ required: true, message: '请输入学历' }]")
            el-input(v-model="basicInfo.education")
          el-form-item(prop="major", label="学科专业 :", :rules="[{ required: true, message: '请输入学科专业' }]")
            el-input(v-model="basicInfo.major")
          el-form-item(prop="direction", label="研究方向 :", :rules="[{ required: true, message: '请输入研究方向' }]")
            el-input(v-model="basicInfo.direction")
      el-card
        div.clearfix(slot="header")
          span.header-text 账号信息
          el-button(style="float: right;", type="primary") 保存
        el-form(ref="accountInfo", :model="accountInfo", label-width="120px")
          el-form-item(prop="password", label="密码 :", :rules="[{ required: true, message: '请输入密码' }]")
            el-input(type="password", v-model="accountInfo.password")
          el-form-item(prop="againPassword", label="重复密码 :", :rules="[{ required: true, message: '请确认密码' }]")
            el-input(type="password", v-model="accountInfo.againPassword")
    el-col(:span="10")
      el-card
        div.clearfix(slot="header")
          span.header-text 用户头像
          el-button(style="float: right;", type="primary") 保存
        img.head-img(src="../../../assets/default-head-img.jpg")
        el-upload(action="//jsonplaceholder.typicode.com/posts/", :default-file-list="headImg")
          el-button(size="small", type="primary") 上传头像
          div.el-upload__tip(slot="tip") 只能上传jpg/png文件，且不超过500kb
</template>

<script>
export default {
  name: 'user-profile-management',
  data () {
    return {
      basicInfo: {
        name: '爪哇·斯克瑞',
        sex: '男',
        title: '教授',
        role: '课程负责人',
        education: '医学博士',
        major: '中西医结合医学、病理生理学',
        direction: '心血管病理生理及心脑血管病中西医结合防治'
      },
      accountInfo: {
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

<style lang="sass">
#user-profile-management
  .el-card
    margin-bottom: 20px
    .clearfix:before, .clearfix:after
      display: table
      content: ""
    .clearfix:after
      clear: both
    .header-text
      line-height: 36px
      font-size: 24px
    .head-img
      display: block
      width: 300px
      height: 300px
      border-radius: 50%
      border: 10px solid rgba(0, 0, 0, 0.2)
      margin: 0 auto 25px auto
    .el-upload
      margin: 0 auto
      text-align: center
</style>