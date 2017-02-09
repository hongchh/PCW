<template lang="pug">
div.course-module#course-requirements
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
@import "./style/common.sass"
</style>