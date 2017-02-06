<template lang="pug">
div#teaching-team
  el-row(:gutter="25")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header 教学团队
        div.info-card-content
</template>

<script>
export default {
  name: 'teaching-team'
}
</script>

<style lang="sass">
#teaching-team .el-row
  margin-bottom: 20px
  .info-card
    width: 100%
    .info-card-header
      display: block
      font-size: 36px
      padding: 5px
      margin-left: 15px
    .info-card-content
      font-size: 20px
      margin: 10px
      padding: 15px
      border: 1px solid rgba(0, 0, 0, 0.2)
      border-radius: 8px
      color: grey
      white-space: pre-wrap
</style>