<template lang="pug">
div#home-management
  el-card
    div.clearfix(slot="header")
      span.header-text 轮播图片
    el-row(:gutter="25")
      el-col(:span="12", v-for="(img, i) in slides", :key="i")
        el-upload(action="//jsonplaceholder.typicode.com/posts/", type="drag", :thumbnail-mode="true", :on-preview="handlePreview", :on-remove="handleRemove", :default-file-list="img")
          i.el-icon-upload
          div.el-dragger__text 将文件拖到此处，或<em>点击上传</em>
          div.el-upload__tip 只能上传jpg/png文件，且不超过500kb
  el-card
    div.clearfix(slot="header")
      span.header-text 版块配图
    el-row(:gutter="25")
      el-col(:span="8",  v-for="(img, i) in subImgs", :key="i")
        el-upload(action="//jsonplaceholder.typicode.com/posts/", type="drag", :thumbnail-mode="true", :on-preview="handlePreview", :on-remove="handleRemove", :default-file-list="img", style="height: 200px")
          i.el-icon-upload
          div.el-dragger__text 将文件拖到此处，或<em>点击上传</em>
          div.el-upload__tip 只能上传jpg/png文件，且不超过500kb
  el-row(:gutter="25")
    el-col(:span="8", v-for="(val, key) in editItems", :key="key")
      el-card
        div.clearfix(slot="header")
          span.header-text {{ key }}
          el-button(style="float: right;" type="primary", @click="saveAbstract") 保存
        el-input(type="textarea", autosize, v-model="abstract[val]")
</template>

<script>
import axios from 'axios'

export default {
  name: 'home-management',
  data () {
    return {
      slides: [[{
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
      subImgs: [[{
        name: 'books.jpg',
        url: '/data/img/books.jpg'
      }], [{
        name: 'team.jpg',
        url: '/data/img/team.jpg'
      }], [{
        name: 'achievement.png',
        url: '/data/img/achievement.png'
      }]],
      editItems: {
        '课程简介': 'course',
        '科室团队': 'team',
        '教学成果': 'achievement'
      },
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
  padding: 14px 14px 0 14px
  .el-card
    margin-bottom: 14px
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
    height: 160px
    .el-dragger
      width: 100%
      height: 100%
  .el-col
    margin-bottom: 14px
</style>
