<template lang="pug">
div#teaching-method
  el-row(:gutter="25")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header 教学方法
        div.info-card-content {{ teachingMethod.content }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-method',
  data () {
    return {
      teachingMethod: {
        content: 'loading ...'
      }
    }
  },
  created () {
    axios.get('/data/teaching-method.json').then((res) => {
      if (res.status === 200) {
        this.teachingMethod = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#teaching-method *
  margin: 0
  padding: 0
#teaching-method .el-row
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