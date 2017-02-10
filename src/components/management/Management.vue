<template lang="pug">
div#management
  div#side-nav
    el-menu(theme="dark")
      el-menu-item#menu-header
        i.el-icon-menu &emsp;管理系统
      el-menu-item(index="1")
        i.el-icon-setting &emsp;导航1
      el-menu-item(index="2")
        i.el-icon-picture &emsp;导航2
      el-menu-item(index="3")
        i.el-icon-document &emsp;导航3
      el-menu-item#menu-footer
        img#head-img(src="../../assets/default-head-img.jpg")
        div#username 某某某教授
        div#signout 退出
  div#welcome
  div#manage-body
</template>

<script>
export default {
  name: 'management'
}
</script>

<style lang="sass">
#management
  width: 100%
  height: 100%
  position: relative
  #side-nav, #welcome, #manage-body
    position: absolute
  #side-nav
    width: 280px
    height: 100%
    .el-menu
      height: 100%
      text-align: center
      .el-menu-item
        height: 60px
        line-height: 60px
        padding: 0
      #menu-header
        text-align: left
        font-size: 20px
        height: 70px
        line-height: 70px
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)
        background-color: rgba(255, 255, 255, 0.05)
        padding: 0 16px 0 24px
        color: white
        cursor: default
      #menu-footer:hover
        background-color: inherit
      #menu-footer
        position: absolute
        width: 100%
        height: 100px
        bottom: 20px
        cursor: default
        #head-img
          display: block
          width: 60px
          height: 60px
          border-radius: 50%
          position: absolute
          top: 20px
          left: 20px
        #username, #signout
          position: absolute
          height: 30px
          width: 160px
          line-height: 30px
          left: 80px
          text-align: center
          color: white
        #username
          font-size: 24px
          top: 25px
        #signout
          font-size: 14px
          bottom: 15px
          cursor: pointer
  #welcome
    background-color: white
    width: calc(100% - 280px)
    height: 200px
    right: 0
  #manage-body
    width: calc(100% - 280px)
    height: calc(100% - 200px)
    right: 0
    bottom: 0
    background-color: blue
</style>