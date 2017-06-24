<template lang="pug">
div.course-module#teaching-method
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
@import "./style/common.sass"
</style>
