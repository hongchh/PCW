<template lang="pug">
div#honor
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 个人荣誉
      ul
        li(v-for="honor in honors")
          a.link(v-if="honor.url", :href="honor.url", target="_blank") {{ honor.description }}
          span(v-else) {{ honor.description }}
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
    axios.get('./static/data/honor.json')
      .then(res => {
        if (res.status === 200) {
          this.honors = res.data.reverse()
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
