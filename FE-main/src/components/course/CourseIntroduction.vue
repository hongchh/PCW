<template lang="pug">
div#course-introduction
  div.intro-item(v-for="(item, i) in introduction")
    h2(v-if="i % 2 === 0") {{ '◎ ' + item.title }}
    h2.right-title(v-else) {{ item.title + ' ◎' }}
    div(:class="i % 2 !== 0 ? 'line left-line' : 'line right-line'")
    div.content
      template(v-if="i % 2 !== 0")
        p {{ item.content }}
        img(src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502631462711&di=9b667e21643d8d98b795ad053c05cb60&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110919%2F2195-11091915362049.jpg")
      template(v-else)
        img(src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502631462711&di=9b667e21643d8d98b795ad053c05cb60&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110919%2F2195-11091915362049.jpg")
        p {{ item.content }}
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
#course-introduction
  padding: 20px
  .intro-item
    margin-bottom: 15px
    h2
      border-bottom: none
      margin-bottom: 8px
      padding: 0 10px
    .right-title
      text-align: right
    .line
      height: 6px
      background: #35904d
      border-radius: 20px
      position: relative
      &:after
        content: ''
        width: 0
        height: 0
        border-left: 12px solid transparent
        border-right: 12px solid transparent
        border-bottom: 25px solid #35904d
        position: absolute
        top: -21px
    .left-line:after
      left: 0
    .right-line:after
      right: 0
    .content
      margin-top: 20px
      display: flex
      align-items: center
      img
        width: 150px
        height: 150px
        margin: 10px
      p
        flex-grow: 1
        padding: 10px
        white-space: pre-wrap
</style>
