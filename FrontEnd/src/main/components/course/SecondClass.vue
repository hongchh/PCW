<template lang="pug">
div#second-class
  el-row(type="flex", justify="center")
    el-col(:span="8")
      div.img-item(v-for="item in columnImg[0]")
        img(:src="item.url")
        p.description {{ item.description }}
    el-col(:span="8")
      div.img-item(v-for="item in columnImg[1]")
        img(:src="item.url")
        p.description {{ item.description }}
    el-col(:span="8")
      div.img-item(v-for="item in columnImg[2]")
        img(:src="item.url")
        p.description {{ item.description }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'second-class',
  data () {
    return {
      columnImg: [[], [], []]
    }
  },
  created () {
    axios.get('/static/data/second-class.json').then(res => {
      if (res.status === 200) {
        for (let i = 0, j = 0; i < res.data.length; ++i) {
          this.columnImg[j].push(res.data[i])
          j = Number.parseInt((j + 1) % 3)
        }
      }
    })
  }
}
</script>

<style lang="sass">
#second-class
  .el-col
    position: relative
    padding: 0 4px
    .img-item
      width: 100%
      position: relative
      margin: 8px 0
      img
        width: 100%
        height: auto
      .description
        position: absolute
        bottom: 0
        left: 0
        right: 0
        margin: 0
        background: rgba(0, 0, 0, 0.45)
        color: white
        padding: 10px
        font-size: 24px
</style>
