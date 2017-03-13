<template lang="pug">
div#main
  div#main-header
    router-link(to="/main/home")
      img#header-logo(src="../../assets/logo.png")
    router-link#header-auth(to="/signin") 登录
  div#main-nav
    div.nav-item#nav-item-0
      span 课程信息&nbsp;
      i.el-icon-caret-bottom
      div.link-list#list-0
        router-link.link-list-item(to="/main/course-introduction") 课程介绍
        router-link.link-list-item(to="/main/course-requirements") 课程要求
        router-link.link-list-item(to="/main/course-arrangement") 课程安排
        router-link.link-list-item(to="/main/teaching-plan") 教学大纲
        router-link.link-list-item(to="/main/teaching-method") 教学方法
        router-link.link-list-item(to="/main/teaching-team") 教学团队
    div.nav-item#nav-item-1
      span 课程资源&nbsp;
      i.el-icon-caret-bottom
      div.link-list
        router-link.link-list-item(to="/main/teaching-video") 教学视频
        router-link.link-list-item(to="/main/courseware") 教案课件
        router-link.link-list-item(to="/main/problem-set") 试卷习题
        router-link.link-list-item(to="/main/teaching-material") 教材信息
        router-link.link-list-item(to="/main/vocabulary") 专业词汇
    div.nav-item#nav-item-2
      span 教学成果&nbsp;
      i.el-icon-caret-bottom
      div.link-list
        router-link.link-list-item(to="/main/honor") 教学荣誉
        router-link.link-list-item(to="/main/achievements") 科研成就
        router-link.link-list-item(to="/main/evaluation") 课程评价
    div.nav-item#nav-item-3
      router-link.nav-link(to="/main/interaction") 互动专区
  div#main-body
    router-view
  div#main-footer
    span 联系电话: 020-87330028 | Copyright © 2017 中山大学中山医学院病理生理学教研室 All Rights Reserved.
</template>

<script>
export default {
  name: 'main'
}
</script>

<style lang="sass">
#main, #main-header, #main-nav, #main-body, #main-footer
  position: relative
#main
  height: 100%
#main-header
  height: 100px
  background: #489e6b
  #header-logo
    height: 100px
    margin-left: 50px
  #header-auth
    font-size: 10px
    color: white
    text-decoration: none
    position: absolute
    top: 10px
    right: 10px
#main-nav
  height: 40px
  background: #35904d
  .nav-item
    position: absolute
    width: 15%
    height: 40px
    color: white
    line-height: 40px
    font-size: 17px
    text-align: center
    .link-list
      position: absolute
      width: 100%
      top: 40px
      background: rgba(0, 0, 0, 0.6)
      z-index: -1
      line-height: 27px
      height: 0
      transition: all .2s ease-in
      overflow: hidden
      .link-list-item
        display: block
        height: 28px
        font-size: 14px
        color: white
        text-decoration: none
      .link-list-item:hover
        background: rgba(0, 0, 0, 0.3)
    .nav-link
      color: white
      text-decoration: none
  .nav-item:hover .link-list
    z-index: 99
    transition: all .2s ease-out
  #nav-item-0:hover .link-list
    height: 168px
  #nav-item-1:hover .link-list
    height: 140px
  #nav-item-2:hover .link-list
    height: 84px
  #nav-item-0
    left: 15%
  #nav-item-1
    left: 33%
  #nav-item-2
    left: 52%
  #nav-item-3
    left: 70%
#main-body
  box-sizing: border-box
  width: 90%
  min-height: calc(100% - 200px)
  margin: 0 auto
  background: white
  padding: 15px 0
#main-footer
  height: 60px
  background: #489e6b
  text-align: center
  line-height: 60px
  color: white
  span
    font-size: 14px
</style>