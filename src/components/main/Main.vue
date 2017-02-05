<template lang="pug">
div#main
  div#main-header
    router-link(to="/main/home")
      img#header-logo(src="../../assets/logo.png")
    router-link#header-auth(to="/signin") 登录
  div#main-nav
    div.nav-item#nav-item-0
      span 课程信息
      div.link-list
        router-link.link-list-item(to="/main/course-introduction") 课程介绍
        router-link.link-list-item(to="/main/course-requirements") 课程要求
        router-link.link-list-item(to="/main/course-arrangement") 课程安排
        router-link.link-list-item(to="/main/teaching-plan") 教学大纲
        router-link.link-list-item(to="/main/teaching-method") 教学方法
        router-link.link-list-item(to="/main/teaching-team") 教学团队
    div.nav-item#nav-item-1
      span 课程资源
      div.link-list
        router-link.link-list-item(to="/main/teaching-video") 教学视频
        router-link.link-list-item(to="/main/courseware") 教案课件
        router-link.link-list-item(to="/main/problem-set") 试卷习题
        router-link.link-list-item(to="/main/teaching-material") 教材信息
        router-link.link-list-item(to="/main/vocabulary") 专业词汇
    div.nav-item#nav-item-2
      span 教学成果
      div.link-list
        router-link.link-list-item(to="/main/achievements") 教学荣誉
        router-link.link-list-item(to="/main/evaluation") 科研成就
        router-link.link-list-item(to="/main/honor") 课程评价
    div.nav-item#nav-item-3
      router-link.nav-link(to="/main/interaction") 互动专区
  div#main-body
    router-view
  div#main-footer
    span 联系电话: 020-87330028 | Copyright © 2017 中山大学中山医学院病理生理学教研室 All Right Reserved.
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
  background: #489e6b
  #header-logo
    height: 100px
    padding: 10px
    margin-left: 100px
  #header-auth
    font-size: 15px
    color: white
    text-decoration: none
    position: absolute
    top: 10px
    right: 10px
#main-nav
  height: 60px
  background: #35904d
  .nav-item
    position: absolute
    width: 15%
    height: 60px
    color: white
    line-height: 60px
    font-size: 25px
    text-align: center
    .link-list
      position: absolute
      width: 100%
      top: 60px
      background: rgba(0, 0, 0, 0.5)
      z-index: -1
      line-height: 40px
      height: 0
      .link-list-item
        display: block
        width: 100%
        height: 40px
        font-size: 20px
        color: white
        text-decoration: none
      .link-list-item:hover
        background: rgba(0, 0, 0, 0.2)
    .nav-link
      color: white
      text-decoration: none
  .nav-item:hover .link-list
    height: auto
    z-index: 99
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
  padding: 10px 20px 10px 20px
  box-shadow: 0 0 5px black
#main-footer
  height: 100px
  background: #489e6b
  text-align: center
  line-height: 100px
  color: white
  span
    font-size: 15px
</style>