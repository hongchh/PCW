<template lang="pug">
div#teaching-method-management
  el-card
    div.clearfix(slot="header")
      span.header-text 教学方法
      el-button(style="float: right;" type="primary") 保存
    el-input(type="textarea", autosize, v-model="teachingMethod.content")
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-method-management',
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
