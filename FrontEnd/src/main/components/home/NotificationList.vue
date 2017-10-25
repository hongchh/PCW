<template lang="pug">
div#notification-list
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 公告
      p(v-if="loading") loading ...
      div(v-else @click="toDetail($event)")
        div.notification(v-for="(item, i) in notifications", :id="'div-' + i")
          span.title(:id="'title-' + i") {{ item.title }}
          span.date(:id="'date-' + i") {{ item.date }}
</template>

<script>
// import axios from 'axios'
import data from '../../../../static/data/notification.json'

export default {
  name: 'notification-list',
  data () {
    return {
      loading: false,
      notifications: data
    }
  },
  created () {
    // axios.get('./static/data/notification.json').then(res => {
    //   if (res.status === 200) {
    //     this.loading = false
    //     this.notifications = res.data
    //     sessionStorage.setItem('notification', JSON.stringify(res.data))
    //   }
    // })
  },
  methods: {
    toDetail (event) {
      this.$router.push('/notification?id=' + event.target.id.split('-')[1])
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
  .notification:hover
    cursor: pointer
    span
      color: #20A0FF
</style>
