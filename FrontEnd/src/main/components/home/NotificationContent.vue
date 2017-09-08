<template lang="pug">
div#notification-content
  h1 xxxxxx通知
  div.info
    span.author 发布人：xxx
    span.date 2017-08-26
  div.content
</template>

<script>
export default {
  name: 'notification-content'
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
</style>
