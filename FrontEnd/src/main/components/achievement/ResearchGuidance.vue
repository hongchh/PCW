<template lang="pug">
div#research-guidance
  el-row(type="flex", justify="center")
    el-col(:span="22")
      el-table(:data="guidance", stripe)
        el-table-column(min-width="120", label="时间", header-align="center", align="center", prop="time")
        el-table-column(min-width="480", label="指导项目", header-align="center")
          template(scope="scope")
            ul
              li {{ scope.row.description }}
            el-tag(v-for="(achievement, i) in scope.row.achievement", :key="i") {{ achievement }}
        el-table-column(min-width="120", label="指导教师", header-align="center", align="center", prop="teacher")
</template>

<script>
import axios from 'axios'

export default {
  name: 'research-guidance',
  data () {
    return {
      guidance: []
    }
  },
  created () {
    axios.get('/static/data/research-guidance.json')
      .then((res) => {
        if (res.status === 200) {
          this.guidance = res.data
        }
      })
  }
}
</script>

<style lang="sass">
#research-guidance
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
