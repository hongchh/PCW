<template lang="pug">
div#courseware
  el-row(type="flex", justify="center")
    el-col(:span="20")
      el-tabs
        el-tab-pane(label="临床医学专业五年制")
          div.item(v-for="item in coursewares")
            span(v-if="!item.link") {{ item.content }}
            a.link(v-if="item.link", :href="item.link", target="_blank") {{ item.content }}
        el-tab-pane(label="临床医学专业七年制")
          div.item(v-for="item in coursewares")
            span(v-if="!item.link") {{ item.content }}
            a.link(v-if="item.link", :href="item.link", target="_blank") {{ item.content }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'courseware',
  data () {
    return {
      coursewares: []
    }
  },
  created () {
    axios.get('/data/coursewares.json')
      .then(res => {
        if (res.status === 200) {
          this.coursewares = res.data
        }
      })
  }
}
</script>

<style lang="sass">
@import './style/common.sass'

#courseware
  .el-tabs__item
    font-size: 20px
    height: 50px
    line-height: 50px
    padding: 0 20px

  .item
    padding: 12px 20px
</style>
