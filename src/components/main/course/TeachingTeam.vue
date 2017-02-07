<template lang="pug">
div#teaching-team
  el-row(:gutter="25")
    el-col(:span="24")
      el-card.info-card
        div(slot="header")
          span.info-card-header 教学团队
        div.info-card-content
          el-row(:gutter="25")
            el-col(:span="8", v-for="member in teachingTeam")
              img.head-img(src="../../../assets/default-head-img.jpg")
              div.team-member
                p.name {{ member.name + member.title }}
                div
                  el-tag(type="primary") {{ member.role }}
                  el-tag(type="success") {{ member.education }}
                  el-tag(type="warning") {{ member.sex }}
                p 学科专业：{{ member.major }}
                p 研究方向：{{ member.direction }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-team',
  data () {
    return {
      teachingTeam: []
    }
  },
  created () {
    axios.get('/data/teaching-team.json').then((res) => {
      if (res.status === 200) {
        this.teachingTeam = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#teaching-team *
  margin: 0
  padding: 0
#teaching-team .el-row
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
      .el-col
        height: 600px
        overflow: hidden
      .head-img
        display: block
        width: 60%
        border-radius: 50%
        border: 10px solid rgba(0, 0, 0, 0.1)
        margin: 0 auto 5px auto
      .team-member
        text-align: center
        .name
          font-size: 30px
        .el-tag
          margin: 0 5px
          padding: 0 5px
</style>