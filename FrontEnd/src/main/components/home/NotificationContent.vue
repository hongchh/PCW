<template lang="pug">
div#notification-content
  h1 xxxxxx通知
  div.info
    span.author 发布人：xxx
    span.date 发布时间：2017-08-26
  div.content {{ content }}
</template>

<script>
export default {
  name: 'notification-content',
  data () {
    return {
      content: '这是一条公告，这是一条公告，这是一条公告\n这是一条很长很长的公告，这是一条很长很长的公告，这是一条很长很长的公告\n这是一条公告'
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
