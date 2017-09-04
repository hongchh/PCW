<template lang="pug">
div#honor
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 个人荣誉
      ul
        li(v-for="honor in honors")
          a.link(:href="honor.url", target="_blank") {{ honor.description }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'honor',
  data () {
    return {
      honors: []
    }
  },
  created () {
    axios.get('/data/honor.json')
      .then(res => {
        if (res.status === 200) {
          this.honors = res.data
        }
      })
  }
}
</script>

<style lang="sass">
@import './style/common.sass'

#honor
  img
    height: 100%
    margin: auto
</style>
