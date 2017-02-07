<template lang="pug">
div.course-module#course-arrangement
  el-row(:gutter="25")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header 阶段安排
        p.info-card-content {{ arrangement.stage }}
  el-row(:gutter="25")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header 考试安排
        p.info-card-content {{ arrangement.exam }}
  el-row(:gutter="25")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header 教学安排
        div#course-table
          el-table(:data="arrangement.course", stripe, style="width: 100%")
            el-table-column(prop="week", label="周数")
            el-table-column(prop="content", label="上课内容")
</template>

<script>
import axios from 'axios'

export default {
  name: 'course-arrangement',
  data () {
    return {
      arrangement: {
        stage: 'loading ...',
        exam: 'loading ...'
      }
    }
  },
  created () {
    axios.get('/data/course-arrangement.json').then((res) => {
      if (res.status === 200) {
        this.arrangement = res.data
      }
    })
  }
}
</script>

<style lang="sass">
@import "./style/common.sass"

#course-arrangement .info-card
  #course-table
    font-size: 20px
    margin: 10px
    padding: 15px
    border: 1px solid rgba(0, 0, 0, 0.2)
    border-radius: 8px
    color: grey
    white-space: pre-wrap
    padding: 0
    .el-table
      border: none
      .el-table_1_column_1
        padding-left: 25px
</style>