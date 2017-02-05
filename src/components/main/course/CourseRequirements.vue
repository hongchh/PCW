<template lang="pug">
div#course-requirements
  el-row(:gutter="25", v-for="(item, i) in requirementItems")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header {{ item }}
        p.info-card-content {{ Object.values(requirementContent)[i] }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'course-requirements',
  data () {
    return {
      requirementItems: [
        '基本理论',
        '基本技能',
        '教学要求'
      ],
      requirementContent: {
        theory: 'loading ...',
        skill: 'loading ...',
        teaching: 'loading ...'
      }
    }
  },
  created () {
    axios.get('/data/course-requirements.json').then((res) => {
      if (res.status === 200) {
        this.requirementContent = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#course-requirements .el-row
  margin-bottom: 20px
  .info-card
    width: 100%
    .info-card-header
      display: block
      font-size: 36px
      padding: 5px
      margin-left: 15px
    .info-card-content
      font-size: 20px
      margin: 10px
      padding: 15px
      border: 1px solid rgba(0, 0, 0, 0.2)
      border-radius: 8px
      color: grey
      white-space: pre-wrap
</style>