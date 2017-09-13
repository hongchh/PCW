<template lang="pug">
div#vocabulary
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 附件
      ul
        li
          a.link(href='http://118.89.35.155:8080/static/resource/vocabulary/病理生理学专业词汇.pdf',
          target="_blank") 病理生理学专业词汇.pdf
        li
          a.link(href='http://118.89.35.155:8080/static/resource/vocabulary/病理生理学专业词汇.doc',
          target="_blank") 病理生理学专业词汇.doc
      h2.vocabulary 词汇表（中英文对照）
      el-table(:data="vocabulary", stripe, border)
        el-table-column(min-width="120", label="英文", header-align="center", align="left", prop="English")
        el-table-column(min-width="120", label="中文", header-align="center", align="left", prop="Chinese")
</template>

<script>
import axios from 'axios'

export default {
  name: 'vocabulary',
  data () {
    return {
      vocabulary: []
    }
  },
  created () {
    axios.get('/static/data/vocabulary.json')
      .then(res => {
        if (res.status === 200) {
          this.vocabulary = res.data
        }
      })
  }
}
</script>

<style lang="sass">
@import './style/common.sass'

#vocabulary
  h2
    padding-bottom: 10px
    border-bottom: 1px solid #eeeeee
    font-weight: 400
    font-size: 28px
    color: #1f2f3d

  .vocabulary
    margin-top: 30px

  ul
    margin-top: 10px
    margin-bottom: 10px

  li
    padding-top: 5px
    padding-bottom: 5px

  .el-table
    margin: 30px 0
</style>
