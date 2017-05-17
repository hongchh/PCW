<template lang="pug">
div.course-module#course-introduction
  el-card.info-card(v-for="(item, i) in introductionItems")
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
@import "./style/common.sass"
</style>