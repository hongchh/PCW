<template lang="pug">
div#teaching-team-management
  el-table(:data="teachingTeam", border, stripe, style="width: 100%")
    el-table-column(label="团队成员", width="160px")
      template(scope="scope")
        span {{ scope.row.name + scope.row.title }}
    el-table-column(label="身份信息")
      template(scope="scope")
        el-tag(type="primary") {{ scope.row.role }}
        el-tag(type="success") {{ scope.row.education }}
        el-tag(type="warning") {{ scope.row.sex }}
    el-table-column(label="学科专业", prop="major")
    el-table-column(label="研究方向", prop="direction")
    el-table-column(label="操作", v-if="superUser")
      template(scope="scope")
        el-button(type="primary", icon="edit", size="small", @click="editUserInfo(scope.$index)")
        el-button(type="danger", icon="delete", size="small", @click="deleteUser(scope.$index)")
  el-row(:gutter="20", v-if="superUser")
    el-col(:span="2", :offset="11")
      el-button(type="primary", size="small", @click="addUser") 添加成员

  el-dialog(title="成员信息", v-model="dialogVisible")
    el-form(:model="userInfo", ref="userInfo", label-width="120px")
      el-form-item(prop="username", label="账号 :", :rules="[{ required: true, message: '请输入账号' }]")
        el-input(v-model="userInfo.username")
      el-form-item(prop="password", label="密码 :", :rules="[{ required: true, message: '请输入密码' }]")
        el-input(type="password", v-model="userInfo.password")
      el-form-item(prop="name", label="姓名 :", :rules="[{ required: true, message: '请输入姓名' }]")
        el-input(v-model="userInfo.name")
      el-form-item(prop="title", label="职称 :", :rules="[{ required: true, message: '请输入职称' }]")
        el-input(v-model="userInfo.title")
      el-form-item(prop="sex", label="性别 :", :rules="[{ required: true, message: '请选择性别' }]")
        el-select(v-model="userInfo.sex")
          el-option(label="男", value="男")
          el-option(label="女", value="女")
      el-form-item(prop="role", label="角色 :", :rules="[{ required: true, message: '请输入角色' }]")
        el-input(v-model="userInfo.role")
      el-form-item(prop="education", label="学历 :", :rules="[{ required: true, message: '请输入学历' }]")
        el-input(v-model="userInfo.education")
      el-form-item(prop="major", label="学科专业 :", :rules="[{ required: true, message: '请输入学科专业' }]")
        el-input(v-model="userInfo.major")
      el-form-item(prop="direction", label="研究方向 :", :rules="[{ required: true, message: '请输入研究方向' }]")
        el-input(v-model="userInfo.direction")
    div(slot="footer")
      el-button(@click="cancel") 取消
      el-button(type="primary", @click="submit") 确定
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-team-management',
  data () {
    return {
      teachingTeam: [],
      dialogVisible: false,
      userInfo: {},
      addNewUser: false,
      superUser: true
    }
  },
  created () {
    axios.get('/data/teaching-team.json').then((res) => {
      if (res.status === 200) {
        this.teachingTeam = res.data
      }
    })
  },
  methods: {
    editUserInfo (index) {
      this.userInfo = this.teachingTeam[index]
      this.addNewUser = false
      this.dialogVisible = true
    },
    deleteUser (index) {
      // TODO: 提交请求到服务器删除用户
      this.teachingTeam.splice(index, 1)
    },
    addUser () {
      this.userInfo = {}
      this.addNewUser = true
      this.dialogVisible = true
    },
    cancel () {
      this.dialogVisible = false
    },
    submit () {
      // TODO: 提交用户信息到服务器
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="sass">
#teaching-team-management
  .el-tag
    margin: 0 5px
    padding: 0 5px
  .el-row
    margin-top: 20px
</style>