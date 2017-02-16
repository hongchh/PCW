<template lang="pug">
div#teaching-plan-management
  el-card
    div.clearfix(slot="header")
      span.header-text 教学大纲
      el-button(style="float: right;" type="primary") 保存
    el-input(type="textarea", autosize, v-model="teachingPlan.content")
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-plan-management',
  data () {
    return {
      teachingPlan: {
        content: 'loading ...'
      }
    }
  },
  created () {
    axios.get('/data/teaching-plan.json').then((res) => {
      if (res.status === 200) {
        this.teachingPlan = res.data
      }
    })
  }
}
</script>