<template lang="pug">
div#teaching-video
  el-row(type="flex", justify="center")
    el-col(:span="20")
      el-tabs
        el-tab-pane(label="中文教学录像")
          el-table(:data="ChineseTeachingVideos", stripe)
            el-table-column(min-width="360", label="教学录像", prop="title")
            el-table-column(min-width="200", label="主讲")
              template(slot-scope="scope")
                el-tag(v-if="scope.row.presenter", type="primary") {{ scope.row.presenter }}
                span(v-if="!scope.row.presenter") 无
            el-table-column(min-width="240", label="操作")
              template(slot-scope="scope")
                a(:href="scope.row.link", target="_blank")
                  el-button(type="primary", size="small") 在线观看
        el-tab-pane(label="英文教学录像")
          el-table(:data="EnglishTeachingVideos", stripe)
            el-table-column(min-width="360", label="教学录像", prop="title")
            el-table-column(min-width="200", label="主讲")
              template(slot-scope="scope")
                el-tag(v-if="scope.row.presenter", type="primary") {{ scope.row.presenter }}
                span(v-if="!scope.row.presenter") 无
            el-table-column(min-width="240", label="操作")
              template(slot-scope="scope")
                a(:href="scope.row.link", target="_blank")
                  el-button(type="primary", size="small") 在线观看
</template>

<script>
// import axios from 'axios'
import data from '../../../../static/data/teaching-video.json'

export default {
  name: 'teaching-video',
  data () {
    return {
      teachingVideos: data
    }
  },
  // created () {
  //   axios.get('./static/data/teaching-video.json')
  //     .then(res => {
  //       if (res.status === 200) {
  //         this.teachingVideos = res.data
  //       }
  //     })
  // },
  computed: {
    ChineseTeachingVideos: function () {
      return this.teachingVideos.filter((video) => {
        return video.language === 'zh'
      })
    },
    EnglishTeachingVideos: function () {
      return this.teachingVideos.filter((video) => {
        return video.language === 'en'
      })
    }
  }
}
</script>

<style lang="sass">
#teaching-video
  .el-tabs__item
    font-size: 20px
    height: 50px
    line-height: 50px
    padding: 0 20px

  .el-table
    margin-top: 20px
    font-size: 14px
    th
      height: 50px
      font-size: 16px
    td
      height: 50px
    a
      margin-left: 10px
  .video-container
    width: 95%
    height: 100%
    margin: 0 auto
    video
      width: 100%
  .el-dialog__header
    text-align: center
  .el-dialog__title
    font-size: 20px
</style>
