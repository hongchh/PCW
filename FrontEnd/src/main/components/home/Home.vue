<template lang="pug">
div#main-home
  el-carousel(v-if="slides.length !== 0" height="425px", indicator-position="none")
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
          span.header-text 教学团队
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
          div.notification(v-for="(item, i) in notification", @click="$router.push('/notification?id=' + i)")
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
// import axios from 'axios'
import data from '../../../../static/data/home.json'
import data2 from '../../../../static/data/notification.json'

export default {
  name: 'home',
  data () {
    return {
      course: data.course,
      team: data.team,
      achievement: data.achievement,
      notification: [],
      links: data.links,
      slides: [],
      tmpSlides: data.slides
    }
  },
  created () {
    // axios.get('./static/data/home.json').then((res) => {
    //   if (res.status === 200) {
    //     this.course = res.data.course
    //     this.team = res.data.team
    //     this.achievement = res.data.achievement
    //     this.links = res.data.links
    //     this._slides = res.data.slides
    //     this.loadSlides(0)
    //   }
    // })
    this.loadSlides(0)
    // axios.get('./static/data/notification.json').then(res => {
    //   if (res.status === 200) {
    //     sessionStorage.setItem('notification', JSON.stringify(res.data))
    //     for (let i = 0; i < 10 && i < res.data.length; ++i) {
    //       this.notification.push(res.data[i])
    //     }
    //   }
    // })
    for (let i = 0; i < 10 && i < data2.length; ++i) {
      this.notification.push(data2[i])
    }
  },
  methods: {
    /*
     * 顺序加载轮播图减少首页请求并发量
     * @param  { Number }  index  当前加载到第几张轮播图
     */
    loadSlides (index) {
      if (index < this.tmpSlides.length) {
        let img = new Image()
        img.src = this.tmpSlides[index]
        img.onload = () => {
          this.slides.push(this.tmpSlides[index])
          this.loadSlides(index + 1)
        }
        // 加载失败则继续加载下一张，以免中断后续图片的加载
        img.onerror = () => {
          this.loadSlides(index + 1)
        }
      }
    }
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
      .notification:hover
        cursor: pointer
        span
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
