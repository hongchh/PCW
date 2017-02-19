<template lang="pug">
div#main-home
  el-row(:gutter="25")
    el-col(:span="24")
      el-carousel(height="500px", indicator-position="none")
        el-carousel-item
          div.slide-holder
            img.slide(src="../../../assets/slide/0.png")
        el-carousel-item
          div.slide-holder
            img.slide(src="../../../assets/slide/1.png")
        el-carousel-item
          div.slide-holder
            img.slide(src="../../../assets/slide/2.png")
        el-carousel-item
          div.slide-holder
            img.slide(src="../../../assets/slide/3.png")
  el-row(:gutter="25")
    el-col(:span="16")
      div.info
        div.info-header
          span.header-text 课程介绍
          router-link.heaedr-link(to="/main/course-introduction") more
        div.info-content
          img(src="../../../assets/books.jpg")
          p {{ abstract.course }}
      div.info
        div.info-header
          span.header-text 科室团队
          router-link.heaedr-link(to="/main/teaching-team") more
        div.info-content
          img(src="../../../assets/team.jpg")
          p {{ abstract.team }}
      div.info
        div.info-header
          span.header-text 教学成果
          router-link.heaedr-link(to="/main/achievements") more
        div.info-content
          img(src="../../../assets/achievement.png")
          p {{ abstract.achievement }}
    el-col(:span="8")
      div.info
        div.info-header
          span.header-text 其他内容
        div.info-content
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
      div.info
        div.info-header
          span.header-text 其他内容
        div.info-content
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
          h1 待补充合适的首页内容...
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      abstract: {
        course: 'loading',
        team: 'loading',
        achievement: 'loading'
      }
    }
  },
  created () {
    axios.get('/data/abstract.json').then((res) => {
      if (res.status === 200) {
        this.abstract = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#main-home
  .slide-holder
    width: 100%
    height: 100%
    overflow: hidden
    .slide
      width: 100%
      height: 100%
  .info
    padding: 20px 10px
    overflow: hidden
    .info-header
      border-bottom: 5px solid #35904d
      margin-bottom: 10px
      .header-text
        display: inline-block
        font-size: 28px
        padding: 5px
      .heaedr-link
        float: right
        margin: 15px 15px 0 0
        color: #20a0ff
        text-decoration: none
    .info-content
      color: grey
      img
        float: left
        width: 260px
        height: 260px
        margin: 15px
      p
        font-size: 18px
        line-height: 28px
        margin-left: 300px
        padding: 15px
        white-space: pre-wrap
</style>