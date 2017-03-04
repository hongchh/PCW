<template lang="pug">
div#management
  div#side-nav
    el-menu(theme="dark", router)
      el-menu-item#menu-header(index="#")
        i.el-icon-menu &emsp;病理生理学
      el-menu-item(index="/management/home")
        i.el-icon-message &emsp;首页信息
      el-menu-item(index="/management/course")
        i.el-icon-date &emsp;课程管理
      el-menu-item(index="#1")
        i.el-icon-picture &emsp;资源管理
      el-menu-item(index="#2")
        i.el-icon-document &emsp;成就管理
      el-menu-item(index="#3")
        i.el-icon-share &emsp;互动管理
      el-menu-item(index="/management/account")
        i.el-icon-setting &emsp;账号管理
      el-menu-item#menu-footer(index="#")
        img#head-img(src="../../assets/default-head-img.jpg")
        div#username 爪哇·斯克瑞
        div#signout(@click="signout") 退出
  div#toolbar
    div#info
      i.el-icon-arrow-right &nbsp;您好，爪哇·斯克瑞！
    div.tool
      i.el-icon-star-off
    div.tool
      i.el-icon-search
    div.tool
      i.el-icon-message
  div#manage-body
    transition(name="slide")
      router-view
</template>

<script>
export default {
  name: 'management',
  methods: {
    signout () {
      // TODO: 退出登录
      this.$router.replace('/main/home')
    }
  }
}
</script>

<style lang="sass">
#management
  height: 100%
  position: relative
  overflow: hidden
  #side-nav, #toolbar, #manage-body
    position: absolute
  #side-nav
    width: 200px
    height: 100%
    .el-menu
      height: 100%
      text-align: center
      border-radius: 0px
      .el-menu-item
        height: 40px
        line-height: 40px
        padding: 0
      #menu-header
        text-align: left
        font-size: 13px
        height: 46px
        line-height: 46px
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)
        background-color: rgba(255, 255, 255, 0.05)
        padding: 0 10px 0 16px
        color: white
        cursor: default
      #menu-footer:hover
        background-color: inherit
      #menu-footer
        position: absolute
        width: 100%
        height: 80px
        bottom: 10px
        cursor: default
        #head-img
          display: block
          width: 40px
          height: 40px
          border-radius: 50%
          border: 2px solid white
          position: absolute
          top: 13px
          left: 20px
        #username, #signout
          position: absolute
          height: 20px
          width: 120px
          line-height: 20px
          left: 60px
          text-align: center
          color: white
        #username
          font-size: 16px
          top: 16px
        #signout
          font-size: 10px
          top: 36px
          cursor: pointer
  #toolbar
    background-color: white
    width: calc(100% - 200px)
    height: 46px
    right: 0
    color: rgba(0,0,0,0.87)
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)
    z-index: 55
    overflow: hidden
    #info, .tool
      height: 100%
      line-height: 46px
      padding-left: 13px
      font-size: 13px
      font-weight: bolder
    .tool
      position: absolute
      width: 40px
      top: 0
      border-left: 1px solid rgba(0,0,0,0.87)
    .tool:nth-child(2)
      right: 80px
    .tool:nth-child(3)
      right: 40px
    .tool:nth-child(4)
      right: 0
  #manage-body
    width: calc(100% - 200px)
    height: calc(100% - 46px)
    right: 0
    bottom: 0
    background-color: white
    overflow: scroll
  .slide-enter-active, .slide-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-enter, .slide-leave-active
    transform: translateY(100%)
    opacity: 0
</style>