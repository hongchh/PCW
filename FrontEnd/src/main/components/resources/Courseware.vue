<template lang="pug">
div#courseware
  el-row(type="flex", justify="center")
    el-col(:span="20")
      el-tabs
        el-tab-pane(label="课件")
          div.item(v-for="(item, i) in courseware")
            span(v-if="!item.url") {{ item.title }}
            a.link(v-else, :href="item.url", target="_blank") {{ item.title }}
        el-tab-pane(label="教案")
          div.item(v-for="(item, i) in lessonplan")
            span(v-if="!item.url") {{ item.title }}
            a.link(v-else, :href="item.url", target="_blank") {{ item.title }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'courseware',
  data () {
    return {
      courseware: [],
      lessonplan: []
    }
  },
  created () {
    axios.get('./static/data/coursewares.json')
      .then(res => {
        if (res.status === 200) {
          this.courseware = res.data.courseware
          this.lessonplan = res.data.lessonplan
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
