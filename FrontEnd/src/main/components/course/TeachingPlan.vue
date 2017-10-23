<template lang="pug">
div#teaching-plan
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 教学大纲
      p(v-if="loading") loading ...
      ul(v-else)
        li(v-for="item in syllabus")
          a.link(:href="item.url", target="_blank") {{ item.title }}
      h2 教学进度表
      p(v-if="loading") loading ...
      ul(v-else)
        li(v-for="item in schedule")
          a.link(:href="item.url", target="_blank") {{ item.title }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-plan',
  data () {
    return {
      loading: true,
      syllabus: null,
      schedule: null
    }
  },
  created () {
    axios.get('./static/data/teaching-plan.json').then((res) => {
      if (res.status === 200) {
        this.loading = false
        this.syllabus = res.data.syllabus
        this.schedule = res.data.schedule
      }
    })
  }
}
</script>

<style lang="sass">
#teaching-plan
  h2
    padding-bottom: 10px
    border-bottom: 1px solid #eeeeee
    font-weight: 400
    font-size: 24px
    color: #1f2f3d
  ul
    margin-top: 10px
    margin-bottom: 10px
  li
    padding-top: 8px
    padding-bottom: 8x
  a.link
    color: #5e6d82
    font-size: 16px
    text-decoration: none
    transition: all 0.25s
    position: relative
    &:hover
      color: #005FA9
      text-decoration: underline
</style>
