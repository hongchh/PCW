<template lang="pug">
div#main
  div#main-header
    h1
      router-link(to="/main/home") 病理生理学
  div#main-nav
    div.nav-item#nav-item-0
      span Course
      div.link-list
        router-link.link-list-item(to="/main/course-introduction") 课程介绍
        router-link.link-list-item(to="/main/course-requirements") 课程要求
        router-link.link-list-item(to="/main/course-arrangement") 课程安排
        router-link.link-list-item(to="/main/teaching-plan") 教学大纲
        router-link.link-list-item(to="/main/teaching-method") 教学方法
        router-link.link-list-item(to="/main/teaching-team") 教学团队
    div.nav-item#nav-item-1
      span Resources
      div.link-list
        router-link.link-list-item(to="/main/teaching-video") 教学视频
        router-link.link-list-item(to="/main/courseware") 教案课件
        router-link.link-list-item(to="/main/problem-set") 试卷习题
        router-link.link-list-item(to="/main/teaching-material") 教材信息
        router-link.link-list-item(to="/main/vocabulary") 专业词汇
    div.nav-item#nav-item-2
      span Achievement
      div.link-list
        router-link.link-list-item(to="/main/achievements") 教学荣誉
        router-link.link-list-item(to="/main/evaluation") 科研成就
        router-link.link-list-item(to="/main/honor") 课程评价
    div.nav-item#nav-item-3
      router-link.nav-link(to="/main/interaction") Interaction
  div#main-body
    router-view
  div#main-footer
    h1 页脚
</template>

<script>
export default {
  name: 'main'
}
</script>

<style lang="sass">
#main, #main-header, #main-nav, #main-body, #main-footer
  width: 100%
  position: relative
#main-header *, #main-nav *, #main-body *, #main-footer *
  margin: 0
  padding: 0
#main
  height: 100%
#main-header
  height: 120px
  background: blue
#main-nav
  height: 60px
  background: green
  .nav-item
    position: absolute
    width: 15%
    height: 60px
    color: white
    line-height: 60px
    font-size: 30px
    text-align: center
    .link-list
      position: absolute
      width: 100%
      top: 60px
      background: rgba(0, 0, 0, 0.3)
      z-index: 99
      line-height: 40px
      .link-list-item
        display: block
        width: 100%
        height: 40px
        font-size: 20px
        color: white
        text-decoration: none
      .link-list-item:hover
        background: rgba(0, 0, 0, 0.3)
    .nav-link
      color: white
      text-decoration: none
  #nav-item-0
    left: 15%
  #nav-item-1
    left: 33%
  #nav-item-2
    left: 52%
  #nav-item-3
    left: 70%
#main-body
  width: 90%
  min-height: calc(100% - 280px)
  margin: 0 auto
  background: white
  padding: 10px
#main-footer
  height: 100px
  background: yellow
</style>