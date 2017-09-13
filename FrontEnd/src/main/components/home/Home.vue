<template lang="pug">
div#main-home
  el-carousel(v-if="slides.length !== 0" height="335px", indicator-position="none")
    el-carousel-item(v-for="(slide, i) in slides", :key="i")
      div.slide-holder
        img.slide(:src="slide")
  el-row(:gutter="25")
    el-col(:span="16")
      div.info
        div.info-header
          span.header-text 课程介绍
          router-link.heaedr-link(to="/course-introduction") more
        div.info-content
          img(:src="course.photo")
          p {{ course.description || 'loading ...' }}
      div.info
        div.info-header
          span.header-text 科室团队
          router-link.heaedr-link(to="/teaching-team") more
        div.info-content
          img(:src="team.photo")
          p {{ team.description || 'loading ...' }}
      div.info
        div.info-header
          span.header-text 教学成果
          router-link.heaedr-link(to="/achievements") more
        div.info-content
          img(:src="achievement.photo")
          p {{ achievement.description || 'loading ...' }}
    el-col(:span="8")
      div.info
        div.info-header
          span.header-text 公告
          router-link.heaedr-link(to="/notification-list") more
        div.info-content
          div.no-data(v-if="notification.length === 0") 暂无公告
          div.notification(v-for="item in notification", @click="$router.push('/notification')")
            span.title {{ item.title }}
            span.date {{ item.date }}
      div.info
        div.info-header
          span.header-text 友情链接
        div.info-content
          div.no-data(v-if="notification.length === 0") 暂无链接
          div.useful-link(v-for=" link in links ")
            a(:href="link.url" target="_blank") {{ link.title }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      course: { photo: '', description: '' },
      team: { photo: '', description: '' },
      achievement: { photo: '', description: '' },
      notification: [],
      links: [],
      slides: []
    }
  },
  created () {
    axios.get('/static/data/home.json').then((res) => {
      if (res.status === 200) {
        this.course = res.data.course
        this.team = res.data.team
        this.achievement = res.data.achievement
        this.notification = res.data.notification
        this.links = res.data.links
        this.slides = res.data.slides
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
    margin-bottom: 20px
    .info-header
      border-bottom: 3px solid #35904d
      margin-bottom: 10px
      .header-text
        display: inline-block
        font-size: 24px
        font-weight: 500
        padding: 5px
      .heaedr-link
        float: right
        margin: 10px 10px 0 0
        color: #20A0FF
        text-decoration: none
        font-style: italic
    .info-content
      overflow: hidden
      min-height: 120px
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
      .notification
        display: flex
        justify-content: space-between
        padding: 3px
        .date
          color: #888
          font-style: italic
      .notification:hover span
        color: #20A0FF
      .useful-link
        padding: 3px
        a
          color: #888
          font-style: italic
          text-decoration: none
        a:hover
          color: #20A0FF
      .no-data
        padding: 15px
</style>
