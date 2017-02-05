<template lang="pug">
div#course-introduction
  el-row(:gutter="25", v-for="(item, i) in introductionItems")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header {{ item }}
        p.info-card-content {{ Object.values(introductionContent)[i] }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'course-introduction',
  data () {
    return {
      introductionItems: [
        '课程简介',
        '历史沿革',
        '课程内容',
        '课程特色'
      ],
      introductionContent: {
        introduction: 'loading',
        history: 'loading',
        content: 'loading',
        feature: 'loading'
      }
    }
  },
  created () {
    axios.get('/data/course-introduction.json').then((res) => {
      if (res.status === 200) {
        this.introductionContent = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#course-introduction .el-row
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