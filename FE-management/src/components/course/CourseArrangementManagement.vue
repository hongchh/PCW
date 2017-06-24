<template lang="pug">
div#course-arrangement-management
  el-card
    div.clearfix(slot="header")
      span.header-text 阶段安排
      el-button(style="float: right;" type="primary") 保存
    el-input(type="textarea", autosize, v-model="arrangement.stage")
  el-card
    div.clearfix(slot="header")
      span.header-text 考试安排
      el-button(style="float: right;" type="primary") 保存
    el-input(type="textarea", autosize, v-model="arrangement.exam")
  el-card
    div.clearfix(slot="header")
      span.header-text 教学安排
      el-button(style="float: right;" type="primary") 保存
    el-row(:gutter="20")
      el-col(:span="3")
        el-input(value="周数", :disabled="true")
      el-col(:span="18")
        el-input(value="上课内容", :disabled="true")
      el-col(:span="3")
        el-input(value="操作", :disabled="true")
    el-row(:gutter="20", v-for="(item, index) in arrangement.course", :key="index")
      el-col(:span="3")
        el-input(v-model="item.week")
      el-col(:span="18")
        el-input(v-model="item.content")
      el-col(:span="3")
        el-button(type="warning", size="small", @click="resetItem(index)", icon="edit", title="重置条目")
        el-button(type="danger", size="small", @click="deleteItem(index)", icon="delete", title="删除条目")
    el-row(:gutter="20")
      el-col(:span="2", :offset="11")
        el-button(type="info", icon="plus", title="增添条目", @click="addItem")
</template>

<script>
import axios from 'axios'

export default {
  name: 'course-arrangement-management',
  data () {
    return {
      arrangement: {
        stage: 'loading ...',
        exam: 'loading ...',
        course: []
      }
    }
  },
  created () {
    axios.get('/data/course-arrangement.json').then((res) => {
      if (res.status === 200) {
        this.arrangement = res.data
      }
    })
  },
  methods: {
    resetItem (index) {
      this.arrangement.course[index].content = ''
    },
    deleteItem (index) {
      this.arrangement.course.splice(index, 1)
    },
    addItem () {
      this.arrangement.course.push({
        week: '',
        content: ''
      })
    }
  }
}
</script>

<style lang="sass">
#course-arrangement-management
  .el-row
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0
</style>
