<template lang="pug">
div#main-home
  el-row(:gutter="25")
    el-col(:span="24")
      el-card
        el-carousel(height="450px", indicator-position="none")
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
    el-col(:span="8")
      el-card.info-card
        div(slot="header")
          span.info-card-header 课程简介
          router-link.info-card-link(to="/main/course-introduction") more
        p.info-card-content &emsp;&emsp;{{ abstract.course }}
    el-col(:span="8")
      el-card.info-card
        div(slot="header")
          span.info-card-header 科室团队
          router-link.info-card-link(to="/main/teaching-team") more
        p.info-card-content &emsp;&emsp;{{ abstract.team }}
    el-col(:span="8")
      el-card.info-card
        div(slot="header")
          span.info-card-header 教学成果
          router-link.info-card-link(to="/main/achievements") more
        p.info-card-content &emsp;&emsp;{{ abstract.achievement }}
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
  width: 100%
  .slide-holder
    width: 100%
    height: 100%
    .slide
      width: 100%
      height: 100%
  .info-card
    width: 100%
    margin-top: 20px
    .info-card-header
      display: inline-block
      font-size: 36px
      padding: 5px
      margin-left: 15px
    .info-card-link
      float: right
      margin: 20px 10px 0 0
      color: #20a0ff
      text-decoration: none
    .info-card-content
      font-size: 20px
      margin: 10px
      padding: 10px
      border: 1px solid rgba(0, 0, 0, 0.2)
      border-radius: 8px
</style>