<template lang="pug">
div#achievements
  el-row(type="flex", justify="center")
    el-col(:span="22")
      el-table(:data="achievements", stripe)
        el-table-column(min-width="480", label="奖项名称", header-align="center")
          template(scope="scope")
            ul
              li {{ scope.row.researchProject }}
            el-tag(v-for="(award, i) in scope.row.awards", :key="i", :type="scope.row.type") {{ award }}
        el-table-column(min-width="120", label="授予单位", header-align="center", align="center", prop="grantingUnit")
        el-table-column(min-width="120", label="署名", header-align="center", align="center", prop="signature")
        el-table-column(min-width="120", label="时间", header-align="center", align="center", prop="time")

</template>

<script>
import axios from 'axios'

export default {
  name: 'achievements',
  data () {
    return {
      achievements: []
    }
  },
  created () {
    axios.get('/data/achievements.json')
      .then((res) => {
        if (res.status === 200) {
          this.achievements = res.data
        }
      })
  }
}
</script>

<style lang="sass">
#achievements
  .el-table
    margin: 20px auto 0
    font-size: 14px
    ul
      margin-top: 10px
      margin-bottom: 10px
  .el-tag
    margin-left: 20px
    margin-bottom: 15px
</style>
