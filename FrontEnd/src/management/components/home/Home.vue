<template lang="pug">
div#home
  md-layout(:md-gutter="16")
    md-layout(md-flex="65")
      notification
    md-layout(md-flex="35")
      links
  carousel
  info
</template>

<script>
import Carousel from './Carousel'
import Notification from './Notification'
import Links from './links'
import Info from './info'

export default {
  name: 'home',
  components: {
    Carousel,
    Notification,
    Links,
    Info
  }
}
</script>

<style lang="sass">
#home
  #carousel, #notification, #links
    margin-bottom: 16px
    width: 100%
.edit-board .md-dialog
  width: 60%
</style>
