<template lang="pug">
div#teaching-team
  el-card(v-for="(member, i) in teachingTeam", :key="i", :body-style="{ padding: '0px' }")
    div.card-content
      img(:src="member.avatar")
      div.info
        div.main
          span.name {{ member.name }}
          span.title {{ member.title ? '◎ ' + member.title : ' ' }}
        div
          el-tag(type="primary", v-if="member.role.length > 0") {{ member.role }}
          el-tag(type="success", v-if="member.education.length > 0") {{ member.education }}
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
    axios.get('/static/data/teaching-team.json').then((res) => {
      if (res.status === 200) {
        this.teachingTeam = res.data
      }
    })
  }
}
</script>

<style lang="sass">
#teaching-team
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  padding: 20px
  .el-card
    width: 240px
    margin-bottom: 20px
    .card-content
      img
        width: 100%
        height: 270px
        display: block
      .info
        padding: 12px
        .main
          display: flex
          justify-content: space-between
          align-items: flex-end
          margin-bottom: 4px
          .name
            font-size: 18px
          .title
            font-size: 12px
            font-style: italic
            color: grey
        .el-tag
          margin: 4px
</style>
