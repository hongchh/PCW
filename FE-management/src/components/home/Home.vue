<template lang="pug">
div#home
  carousel
  notification
</template>

<script>
import Carousel from './Carousel'
import Notification from './Notification'

export default {
  name: 'home',
  components: {
    Carousel,
    Notification
  }
}
</script>

<style lang="sass">
#home
  #carousel, #notification
    margin-bottom: 15px
</style>
