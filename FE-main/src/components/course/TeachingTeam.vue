<template lang="pug">
div.course-module#teaching-team
  el-card.info-card
    div(slot="header")
      span.info-card-header 教学团队
    div.info-card-content
      div.info-holder(v-for="member in teachingTeam")
        img.head-img(:src="member.avatar")
        div.team-member
          p.name {{ member.name }}
          div
            el-tag(type="primary", v-if="member.title.length > 0") {{ member.title }}
            el-tag(type="success", v-if="member.role.length > 0") {{ member.role }}
          div
            el-tag(type="warning", v-if="member.education.length > 0") {{ member.education }}
            el-tag(type="danger", v-if="member.sex.length > 0") {{ member.sex }}
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
#teaching-team .info-card .info-card-content
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  .info-holder
    width: 32%
    margin-bottom: 15px
    .head-img
      display: block
      width: 60%
      height: 300px
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
        margin: 5px
</style>
