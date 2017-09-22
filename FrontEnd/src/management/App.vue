<template lang="pug">
div#app
  md-sidenav.md-left(ref="sideNav")
    md-toolbar.md-large
      div.md-toolbar-container
        img#logo(src="../common/logo.gif")
    md-list
      md-list-item(v-for="(item, i) in navItems"
        :key="i" @click="navigateTo(i)"
        :class="$route.path === item.link ? 'md-primary' : ''")
        md-icon {{ item.icon }}
        span {{ item.text }}
  md-toolbar
    md-button.md-icon-button(@click="$refs.sideNav.open()")
      md-icon menu
    h2.md-title(style="flex: 1") 病理生理学
    md-icon access_time
    md-button {{ currentDay }}
  div#app-body
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    let now = new Date()
    let day = ['一', '二', '三', '四', '五', '六', '日']
    return {
      // 导航链接、描述与图标配置
      navItems: [
        { link: '/home', text: '主页管理', icon: 'home' },
        { link: '/course', text: '课程管理', icon: 'event_note' },
        { link: '/account', text: '账号管理', icon: 'account_circle' }
      ],
      // 当前日期
      currentDay: now.getFullYear() + '年' +
        (now.getMonth() + 1) + '月' +
        now.getDate() + '日 星期' +
        day[now.getDay() - 1]
    }
  },
  methods: {
    /*
     * 链接跳转
     * @param  { Number }  i  第几条链接
     */
    navigateTo (i) {
      this.$router.push(this.navItems[i].link)
      this.$refs.sideNav.close()
    }
  }
}
</script>

<style lang="sass">
// google material icons
@font-face
  font-family: 'Material Icons'
  font-style: normal
  font-weight: 400
  src: url(./assets/fonts/material-icons.woff2) format('woff2')
.material-icons
  font-family: 'Material Icons'
  font-weight: normal
  font-style: normal
  font-size: 24px
  line-height: 1
  letter-spacing: normal
  text-transform: none
  display: inline-block
  white-space: nowrap
  word-wrap: normal
  direction: ltr
  -webkit-font-feature-settings: 'liga'
  -webkit-font-smoothing: antialiased

html, body, #app
  height: 100%
  margin: 0
  padding: 0
  overflow-x: hidden
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif

#app .md-list-item .md-list-item-container > .md-icon:first-child
  flex: 1
  text-align: right
#app-body
  padding: 20px
  position: relative
#app .md-toolbar .md-toolbar-container
  height: auto
  align-self: center
  margin: 0 5px
  #logo
    width: 100%
    height: auto
</style>
