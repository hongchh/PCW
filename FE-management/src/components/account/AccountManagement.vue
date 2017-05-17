<template lang="pug">
div#account-management
  el-tabs(v-model="activeName")
    el-tab-pane(label="个人信息" name="userProfile")
      user-profile-management
    el-tab-pane(label="学生账号" name="studentAccount")
      student-account-management
    el-tab-pane(label="教学团队" name="teachingTeam")
      teaching-team-management
</template>

<script>
import UserProfileManagement from './UserProfileManagement'
import StudentAccountManagement from './StudentAccountManagement'
import TeachingTeamManagement from './TeachingTeamManagement'

export default {
  name: 'account-management',
  components: {
    UserProfileManagement,
    StudentAccountManagement,
    TeachingTeamManagement
  }
}
</script>

<style lang="sass">
#account-management
  padding: 20px
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