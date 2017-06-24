<template lang="pug">
div#course-introduction-management
  el-card(v-for="(val, key) in introductionItems", :key="key")
    div.clearfix(slot="header")
      span.header-text {{ key }}
      el-button(style="float: right;" type="primary") 保存
    el-input(type="textarea", autosize, v-model="introductionContent[val]")
</template>

<script>
import axios from 'axios'

export default {
  name: 'course-introduction-management',
  data () {
    return {
      introductionItems: {
        '课程简介': 'introduction',
        '历史沿革': 'history',
        '课程内容': 'content',
        '课程特色': 'feature'
      },
      introductionContent: {
        introduction: 'loading',
        history: 'loading',
        content: 'loading',
        feature: 'loading'
      }
    }
  },
  created () {
    axios.get('/data/course-introduction.json').then((res) => {
      if (res.status === 200) {
        this.introductionContent = res.data
      }
    })
  }
}
</script>
