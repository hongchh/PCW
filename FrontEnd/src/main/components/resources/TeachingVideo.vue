<template lang="pug">
div#teaching-video
  el-row(type="flex", justify="center")
    el-col(:span="20")
      el-tabs
        el-tab-pane(label="中文教学录像")
          el-table(:data="ChineseTeachingVideos", stripe)
            el-table-column(min-width="360", label="教学录像", prop="title")
            el-table-column(min-width="200", label="主讲")
              template(scope="scope")
                el-tag(v-if="scope.row.presenter", type="primary") {{ scope.row.presenter }}
                span(v-if="!scope.row.presenter") 无
            el-table-column(min-width="240", label="操作")
              template(scope="scope")
                el-button(type="primary", size="small", @click="play(scope.row.link)") 在线观看
                a(:href="scope.row.link")
                  el-button(size="small") 下载
        el-tab-pane(label="英文教学录像")
          el-table(:data="EnglishTeachingVideos", stripe)
            el-table-column(min-width="360", label="教学录像", prop="title")
            el-table-column(min-width="200", label="主讲")
              template(scope="scope")
                el-tag(v-if="scope.row.presenter", type="primary") {{ scope.row.presenter }}
                span(v-if="!scope.row.presenter") 无
            el-table-column(min-width="240", label="操作")
              template(scope="scope")
                el-button(type="primary", size="small", @click="play(scope.row.link)") 在线观看
                a(:href="scope.row.link")
                  el-button(size="small") 下载

      el-dialog(title="在线观看", v-model="dialogVisible", size="small", @close="stop")
        div.video-container
          video(controls, :src="link")

</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-video',
  data () {
    return {
      teachingVideos: [],
      link: '#',
      dialogVisible: false
    }
  },
  created () {
    axios.get('/data/teaching-video.json')
      .then(res => {
        if (res.status === 200) {
          this.teachingVideos = res.data
        }
      })
  },
  methods: {
    play: function (link) {
      this.link = link
      this.dialogVisible = true
    },
    stop: function () {
      this.link = '#'
    }
  },
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
