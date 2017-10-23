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
import defaultAvatar from '../../../common/default-avatar.jpg'

export default {
  name: 'teaching-team',
  data () {
    return {
      teachingTeam: [],
      avatars: []
    }
  },
  created () {
    axios.get('./static/data/teaching-team.json').then((res) => {
      if (res.status === 200) {
        for (let i = 0; i < res.data.length; ++i) {
          this.avatars.push(res.data[i].avatar)
          res.data[i].avatar = defaultAvatar
          this.teachingTeam.push(res.data[i])
        }
        this.loadAvatar(0)
      }
    })
  },
  methods: {
    /*
     * 头像加载
     * @param  { Number }  index  当前到达第几个头像
     */
    loadAvatar (index) {
      let promises = []
      for (let i = 0; index < this.avatars.length && i < 3; ++i, ++index) {
        // 跳过未添加头像的成员
        if (!this.avatars[index]) {
          i -= 1
        } else {
          let tmp = index
          promises.push(new Promise((resolve, reject) => {
            let img = new Image()
            img.src = this.avatars[tmp]
            img.onload = () => {
              this.teachingTeam[tmp].avatar = img.src
              resolve()
            }
            // 加载失败则使用默认头像，不reject以免影响其他头像的正常加载
            img.onerror = () => {
              resolve()
            }
          }))
        }
      }
      Promise.all(promises).then(() => {
        if (index < this.avatars.length) {
          this.loadAvatar(index)
        }
      })
    }
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
