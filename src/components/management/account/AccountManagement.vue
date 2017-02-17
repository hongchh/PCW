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
</style>