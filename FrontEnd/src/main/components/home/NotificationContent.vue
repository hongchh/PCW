<template lang="pug">
div#notification-content
  h1 {{ notification.title }}
  div.info
    span.author {{ '发布人: ' + notification.author }}
    span.date {{ '发布时间: ' + notification.date }}
  div.content {{ notification.content }}
</template>

<script>
import data from '../../../../static/data/notification.json'

export default {
  name: 'notification-content',
  data () {
    return {
      // notification: JSON.parse(sessionStorage.getItem('notification'))[Number.parseInt(this.$route.query.id)]
      notification: data[Number.parseInt(this.$route.query.id)]
    }
  }
}
</script>

<style lang="sass">
#notification-content
  h1
    padding-bottom: 8px
    margin-bottom: 8px
    border-bottom: 1px solid #eeeeee
    text-align: center
    color: #1f2f3d
  .info
    text-align: center
    span
      padding: 0 10px
      color: #888
      font-size: 12px
      font-style: italic
  .content
    width: 600px
    margin: 0 auto
    padding: 20px
    text-align: center
    white-space: pre-wrap
</style>
