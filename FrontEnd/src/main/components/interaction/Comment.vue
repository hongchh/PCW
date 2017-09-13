<template lang="pug">
div#comment
  el-row(type="flex", justify="center")
    el-col(:span="20")
      el-card
        div(slot="header")
          span 话题
          .detail
            span.user {{ discussion.user }}
            span.info 创建于 {{ discussion.time }}
        div.content {{ discussion.content }}
      div.comment-num
        span(v-if="comments.length > 0") {{ comments.length }} 个评论
        span(v-if="comments.length <= 0") 暂无任何评论
      div.comment-container
        ul
          li(v-for="comment in comments")
            div.content {{ comment.content }}
            div.detail
              span.user {{ comment.user }}
              span.info 创建于 {{ comment.time }}

      div.write-comment
        p 撰写评论
        el-input(type="textarea", :autosize="{ minRows: 6, maxRows: 8}", placeholder="请输入评论")
        button 提交评论


</template>

<script>
import axios from 'axios'

export default {
  name: 'comment',
  data () {
    return {
      discussion: {},
      comments: []
    }
  },
  created () {
    this.discussionId = this.$route.params.id
    axios.all([this.getDiscussionById(), this.getCommentsByDiscussionId()])
      .then(axios.spread((discussion, comments) => {
        this.discussion = discussion.data[0]
        this.comments = comments.data
      }))
  },
  methods: {
    getCommentsByDiscussionId () {
      return axios.get('/static/data/comments.json?discussionId=' + this.discussionId)
    },
    getDiscussionById () {
      return axios.get('/static/data/discussions.json?discussionId=' + this.discussionId)
    }
  }
}
</script>

<style lang="sass">
#comment
  .el-card
    .detail
      float: right
      span
        font-size: 14px
      .user
        margin-right: 8px
        color: #489e6b
      .info
        color: #aaaaaa
  .comment-num, .write-comment p
    margin-top: 30px
    font-size: 20px
    padding: 10px 0
    border-bottom: 1px solid #cccccc
  .comment-container
    ul
      list-style: none
      padding: 0
    li
      padding: 12px 0
      transition: all 0.3s
      border-bottom: 1px solid #dddddd
    .detail
      margin-top: 12px
      font-size: 16px
      .user
        margin-right: 8px
        font-size: 14px
        color: #489e6b
      .info
        font-size: 14px
        color: #aaaaaa
  .el-textarea
    width: 600px
  .write-comment
    button
      cursor: pointer
      outline: none
      padding: 6px 10px
      font-size: 14px
      border-radius: 2px
      border: none
      color: #ffffff
      background-color: #489e6b
      margin-left: 15px
      &:hover
        background-color: #009a61
      &:active
        background-color: #008151
</style>
