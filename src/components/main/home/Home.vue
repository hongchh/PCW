<template lang="pug">
div#main-home
  el-carousel(height="335px", indicator-position="none")
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
  .el-carousel
    margin: 15px auto
  .slide-holder
    height: 100%
    .slide
      width: 100%
      height: 100%
  .info
    .info-header
      border-bottom: 3px solid #20A0FF
      margin-bottom: 10px
      .header-text
        display: inline-block
        font-size: 20px
        padding: 5px
      .heaedr-link
        float: right
        margin: 10px 10px 0 0
        color: #13CE66
        text-decoration: none
    .info-content
      img
        float: left
        width: 175px
        height: 175px
        margin: 15px
      p
        font-size: 14px
        line-height: 20px
        margin-left: 200px
        padding: 10px
        white-space: pre-wrap
</style>