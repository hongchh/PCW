<template lang="pug">
div#problem-set
  h1 Problem Set（试卷习题）
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 本科试卷
      ul
        li(v-for="paper in examinationPapers")
          a.link(:href="paper.url", target="_blank") {{ paper.name }}
      h2 各章节习题
      ul
        li(v-for="problem in chapterProblems")
          a.link(v-if="problem.url", :href="problem.url", target="_blank") {{ problem.name }}
          span(v-if="!problem.url") {{ problem.name }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'problem-set',
  data () {
    return {
      examinationPapers: [],
      chapterProblems: []
    }
  },
  created () {
    axios.all([this.getExaminationPapers(), this.getChapterProblems()])
      .then(axios.spread((papers, problems) => {
        if (papers.status === 200) {
          this.examinationPapers = papers.data
        }
        if (problems.status === 200) {
          this.chapterProblems = problems.data
        }
      }))
  },
  methods: {
    getExaminationPapers: function () {
      return axios.get('/data/examination-papers.json')
    },
    getChapterProblems: function () {
      return axios.get('/data/chapter-problems.json')
    }
  }
}
</script>

<style lang="sass">
@import './style/common.sass'

#problem-set
  h2
    padding-bottom: 10px
    border-bottom: 1px solid #eeeeee
    font-weight: 400
    font-size: 28px
    color: #1f2f3d

  ul
    margin-top: 10px
    margin-bottom: 10px
  
  li
    padding-top: 5px
    padding-bottom: 5px
</style>