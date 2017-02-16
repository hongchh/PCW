<template lang="pug">
div#home-management
  el-card
    divclearfix(slot="header")
      span.header-text 展示图片
    el-row(:gutter="25")
      el-col(:span="12", v-for="img in imgList")
        el-upload(action="//jsonplaceholder.typicode.com/posts/", type="drag", :thumbnail-mode="true", :on-preview="handlePreview", :on-remove="handleRemove", :default-file-list="img")
          i.el-icon-upload
          div.el-dragger__text 将文件拖到此处，或<em>点击上传</em>
          div.el-upload__tip 只能上传jpg/png文件，且不超过500kb
  el-row(:gutter="25")
    el-col(:span="8")
      el-card
        div.clearfix(slot="header")
          span.header-text 课程简介
          el-button(style="float: right;" type="primary", @click="saveAbstract") 保存
        el-input(type="textarea", autosize, v-model="abstract.course")
    el-col(:span="8")
      el-card
        div.clearfix(slot="header")
          span.header-text 科室团队
          el-button(style="float: right;" type="primary", @click="saveAbstract") 保存
        el-input(type="textarea", autosize, v-model="abstract.team")
    el-col(:span="8")
      el-card
        div.clearfix(slot="header")
          span.header-text 教学成果
          el-button(style="float: right;" type="primary", @click="saveAbstract") 保存
        el-input(type="textarea", autosize, v-model="abstract.achievement")
</template>

<script>
import axios from 'axios'

export default {
  name: 'home-management',
  data () {
    return {
      imgList: [[{
        name: '0.png',
        url: '/data/img/0.png'
      }], [{
        name: '1.png',
        url: '/data/img/1.png'
      }], [{
        name: '2.png',
        url: '/data/img/2.png'
      }], [{
        name: '3.png',
        url: '/data/img/3.png'
      }]],
      abstract: {
        course: 'loading',
        team: 'loading',
        achievement: 'loading'
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    saveAbstract () {
      // TODO: 向服务器提交更新
      console.log(this.abstract)
    }
  },
  created () {
    axios.get('/data/abstract.json').then((res) => {
      if (res.status === 200) {
        this.abstract = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#home-management
  position: relative
  padding: 20px 20px 0 20px
  .el-card
    margin-bottom: 20px
    .clearfix:before, .clearfix:after
      display: table
      content: ""
    .clearfix:after
      clear: both
    .header-text
      line-height: 36px
      font-size: 24px
  .el-upload
    width: 100%
    height: 240px
    .el-dragger
      width: 100%
      height: 100%
  .el-col
    margin-bottom: 15px
</style>