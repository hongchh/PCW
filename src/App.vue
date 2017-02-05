<template lang="pug">
div#app
  router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
html, body, #app
  width: 100%
  height: 100%
  margin: 0
  padding: 0
  overflow-x: hidden
  background-color: darkgrey
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
</style>