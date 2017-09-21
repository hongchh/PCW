<template lang="pug">
div#app
  div#app-header
    router-link(to="/home")
      img#header-logo(src="../common/logo.gif")
    //- a#header-auth(href="/signin.html") 登录
  div#app-nav
    div.nav-item#nav-item-0
      span 课程信息&nbsp;
      i.el-icon-caret-bottom
      div.link-list#list-0
        router-link.link-list-item(to="/course-introduction") 课程介绍
        router-link.link-list-item(to="/teaching-plan") 教学安排
        router-link.link-list-item(to="/second-class") 第二课堂
        router-link.link-list-item(to="/pbl-teaching") PBL教学
        router-link.link-list-item(to="/teaching-team") 教学团队
    div.nav-item#nav-item-1
      span 课程资源&nbsp;
      i.el-icon-caret-bottom
      div.link-list
        router-link.link-list-item(to="/teaching-video") 教学视频
        router-link.link-list-item(to="/courseware") 教案课件
        router-link.link-list-item(to="/problem-set") 试卷习题
        router-link.link-list-item(to="/teaching-material") 教材信息
        router-link.link-list-item(to="/vocabulary") 专业词汇
    div.nav-item#nav-item-2
      span 教学成果&nbsp;
      i.el-icon-caret-bottom
      div.link-list
        router-link.link-list-item(to="/honor") 教学荣誉
        router-link.link-list-item(to="/achievements") 学术成就
        router-link.link-list-item(to="/evaluation") 课程评价
        router-link.link-list-item(to="/research-guidance") 科研指导
    div.nav-item#nav-item-3
      router-link.nav-link(to="/interaction") 互动专区
  div#app-body
    router-view
  div#app-footer
    span 联系电话: 020-87330028 | Copyright © 2017 中山大学中山医学院病理生理学教研室 All Rights Reserved.
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
html, body, #app
  height: 100%
  margin: 0
  padding: 0
  overflow-x: hidden
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
#app, #app-header, #app-nav, #app-body, #app-footer
  position: relative
#app-header
  height: 120px
  background: #489e6b
  #header-logo
    height: 110px
    margin: 5px 0px 5px 50px
  #header-auth
    font-size: 10px
    color: white
    text-decoration: none
    position: absolute
    top: 10px
    right: 10px
#app-nav
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
    height: 140px
  #nav-item-1:hover .link-list
    height: 140px
  #nav-item-2:hover .link-list
    height: 112px
  #nav-item-0
    left: 15%
  #nav-item-1
    left: 33%
  #nav-item-2
    left: 52%
  #nav-item-3
    left: 70%
#app-body
  box-sizing: border-box
  width: 90%
  max-width: 1200px
  min-height: calc(100% - 220px)
  margin: 0 auto
  background: white
  padding: 15px 0
#app-footer
  height: 60px
  background: #489e6b
  text-align: center
  line-height: 60px
  color: white
  span
    font-size: 14px
</style>
