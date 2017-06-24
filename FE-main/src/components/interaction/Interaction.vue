<template lang="pug">
div#interaction
  el-row(type="flex", justify="center")
    el-col(:span="22")
      ul
        li(v-for="discussion in discussions")
          div.comment-column
            div.comment-container
              span {{ discussion.commentNum }}
              span 评论
          div.discussion-column
            div.discussion-content
              router-link(:to="'/main/interaction/' + discussion.id") {{ discussion.content }}
            div.discussion-detail
              span.user {{ discussion.user }}
              span.time 创建于 {{ discussion.time}}
</template>

<script>
import axios from 'axios'

export default {
  name: 'interaction',
  data () {
    return {
      discussions: []
    }
  },
  created () {
    axios.get('/data/discussions.json')
      .then(res => {
        if (res.status === 200) {
          this.discussions = res.data
        }
      })
  }
}
</script>

<style lang="sass">
#interaction
  ul
    list-style: none
  li
    height: 80px
    padding: 10px 30px
    transition: all 0.3s
    border-bottom: 1px solid #dddddd
  .comment-column
    width: 60px
    height: 100%
    float: left
    position: relative
    .comment-container
      height: 60px
      width: 60px
      position: absolute
      top: 0
      bottom: 0
      margin-top: auto
      margin-bottom: auto
      border: 1px solid #45a163
      color: #45a163
      text-align: center
      span
        height: 30px
        line-height: 30px
        display: block
  .discussion-column
    float: left
    width: calc(100% - 85px)
    height: 100%
    padding-left: 25px
    .discussion-content
      width: 80%
      height: 40px
      line-height: 40px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      a
        text-decoration: none
        color: #333333
        font-weight: 400
        font-size: 18px
        &:hover
          color: #005FA9
          text-decoration: underline
    .discussion-detail
      width: 80%
      height: 40px
      line-height: 40px
      span
        font-size: 14px
        color: #489e6b
        display: inline-block
      .time
        margin-left: 10px
        color: #aaaaaa
</style>
