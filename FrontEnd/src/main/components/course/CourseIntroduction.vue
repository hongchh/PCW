<template lang="pug">
div#course-introduction
  div.intro-item(v-for="(item, i) in introduction")
    div(:class="i % 2 === 0 ? 'line top-line left-line' : 'line top-line right-line'")
    h2(v-if="i % 2 === 0") {{ '☉ ' + item.title }}
    h2.right-title(v-else) {{ item.title + ' ☉' }}
    div.content
      template(v-if="i % 2 === 0")
        p {{ item.content }}
        img(:src="item.icon")
      template(v-else)
        img(:src="item.icon")
        p {{ item.content }}
    div(:class="i % 2 === 0 ? 'line bottom-line left-line' : 'line bottom-line right-line'")
</template>

<script>
// import axios from 'axios'
import data from '../../../../static/data/course-introduction.json'

export default {
  name: 'course-introduction',
  data () {
    return {
      introduction: data
    }
  }
  // created () {
  //   axios.get('./static/data/course-introduction.json').then((res) => {
  //     if (res.status === 200) {
  //       this.introduction = res.data
  //     }
  //   })
  // }
}
</script>

<style lang="sass">
#course-introduction
  padding: 20px
  .intro-item
    margin-bottom: 20px
    h2
      border-bottom: 1px solid #e9e9e9
      margin: 18px 18px 8px 18px
      padding: 0 10px 5px 10px
    .right-title
      text-align: right
    .line
      height: 6px
      background: #35904d
      border-radius: 20px
      position: relative
      &:before, &:after
        content: ''
        width: 0
        height: 0
        border-left: 3px solid transparent
        border-right: 3px solid transparent
        position: absolute
    .top-line:before
      border-top: 70px solid #35904d
      bottom: -65px
    .top-line:after
      border-top: 190px solid #35904d
      bottom: -185px
    .bottom-line:before
      border-bottom: 190px solid #35904d
      top: -185px
    .bottom-line:after
      border-bottom: 70px solid #35904d
      top: -65px
    .left-line:after, .right-line:before
      left: 0
    .left-line:before, .right-line:after
      right: 0
    .content
      margin-top: 20px
      padding: 14px
      display: flex
      img
        width: 150px
        height: 150px
        margin: 0 10px
      p
        white-space: pre-wrap
        margin: 0
        padding: 0 12px
</style>
