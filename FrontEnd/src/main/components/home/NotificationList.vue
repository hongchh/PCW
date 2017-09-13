<template lang="pug">
div#notification-list
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 公告
      p(v-if="loading") loading ...
      div(v-else @click="toDetail")
        div.notification(v-for="item in notifications")
          span.title {{ item.title }}
          span.date {{ item.date }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'notification-list',
  data () {
    return {
      loading: true,
      notifications: []
    }
  },
  created () {
    axios.get('/static/data/home.json').then(res => {
      if (res.status === 200) {
        this.loading = false
        this.notifications = res.data.notification
      }
    })
  },
  methods: {
    toDetail () {
      this.$router.push('/notification')
    }
  }
}
</script>

<style lang="sass">
#notification-list
  h2
    padding-bottom: 10px
    border-bottom: 1px solid #eeeeee
    font-weight: 400
    font-size: 24px
    color: #1f2f3d
  p
    color: #888
  .notification
    padding: 4px
    display: flex
    justify-content: space-between
    span
      font-size: 16px
    .date
      font-style: italic
  .notification:hover span
    color: #20A0FF
</style>
