<template lang="pug">
div.course-module#teaching-team
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
@import "./style/common.sass"

#teaching-team .info-card .info-card-content
  .el-col
    height: 400px
    overflow: hidden
  .head-img
    display: block
    width: 60%
    border-radius: 50%
    border: 5px solid rgba(0, 0, 0, 0.1)
    margin: 0 auto 20px auto
  .team-member
    text-align: center
    p
      margin: 10px auto
      font-size: 12px
    .name
      font-size: 18px
    .el-tag
      margin: 0 5px
</style>