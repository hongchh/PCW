<template lang="pug">
div.course-module#teaching-plan
  el-row(:gutter="25")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header 教学大纲
        div.info-card-content {{ teachingPlan.content }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-plan',
  data () {
    return {
      teachingPlan: {
        content: 'loading ...'
      }
    }
  },
  created () {
    axios.get('/data/teaching-plan.json').then((res) => {
      if (res.status === 200) {
        this.teachingPlan = res.data
      }
    })
  }
}
</script>

<style lang="sass">
@import "./style/common.sass"
</style>