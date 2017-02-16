<template lang="pug">
div#course-requirement-management
  el-card(v-for="(val, key) in requirementItems")
    div.clearfix(slot="header")
      span.header-text {{ key }}
      el-button(style="float: right;" type="primary") 保存
    el-input(type="textarea", autosize, v-model="requirementContent[val]")
</template>

<script>
import axios from 'axios'

export default {
  name: 'course-requirement-management',
  data () {
    return {
      requirementItems: {
        '基本理论': 'theory',
        '基本技能': 'skill',
        '教学要求': 'teaching'
      },
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
#course-requirement-management
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
</style>