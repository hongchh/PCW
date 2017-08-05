<template lang="pug">
div#course-introduction
  el-card.info-card(v-for="(item, i) in introduction", :key="i")
    div(slot="header")
      span.info-card-header {{ item.title }}
    p.info-card-content {{ item.content }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'course-introduction',
  data () {
    return {
      introduction: []
    }
  },
  created () {
    axios.get('/data/course-introduction.json').then((res) => {
      if (res.status === 200) {
        this.introduction = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#course-introduction .info-card
  margin: 15px auto
  .info-card-header
    display: block
    font-size: 18px
    margin-left: 10px
  .info-card-content
    font-size: 14px
    line-height: 18px
    margin: 0
    padding: 10px
    border: 1px solid rgba(0, 0, 0, 0.2)
    border-radius: 5px
    white-space: pre-wrap
</style>
