<template lang="pug">
div#pbl-teaching
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 PBL教学
      p(v-if="loading") loading ...
      ul(v-else)
        li(v-for="item in pblTeachingItems")
          a.link(:href="item.url", target="_blank") {{ item.title }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'pbl-teaching',
  data () {
    return {
      loading: true,
      pblTeachingItems: null
    }
  },
  created () {
    axios.get('/static/data/pbl-teaching.json').then((res) => {
      if (res.status === 200) {
        this.loading = false
        this.pblTeachingItems = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#pbl-teaching
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
