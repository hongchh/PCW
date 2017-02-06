<template lang="pug">
div#teaching-plan
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
#teaching-plan .el-row
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