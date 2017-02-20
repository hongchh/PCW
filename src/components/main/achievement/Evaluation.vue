<template lang="pug">
div#evaluation
  h1 Evalucation（教学评价）
  el-row(type="flex", justify="center")
    el-col(:span="20")
      el-tabs(type="border-card")
        el-tab-pane(label="同行及校内监督组评价")
          h2 校内专家评价
          ul
            li(v-for="evaluation in insideEvaluations")
              a.link(:href="evaluation.url", target="_blank") {{ evaluation.description }}
          h2 校外专家评价
          ul
            li(v-for="evaluation in outsideEvaluations")
              a.link(:href="evaluation.url", target="_blank") {{ evaluation.description }}
        el-tab-pane(label="学生评价")
          ul
            li(v-for="evaluation in studentEvaluations")
              a.link(:href="evaluation.url", target="_blank") {{ evaluation.description }}

</template>

<script>
import axios from 'axios'

export default {
  name: 'evaluation',
  data () {
    return {
      evaluations: []
    }
  },
  created () {
    axios.get('/data/evaluation.json')
      .then(res => {
        if (res.status === 200) {
          this.evaluations = res.data
        }
      })
  },
  methods: {
    getEvaluationsByType: function (type) {
      return this.evaluations.filter((evaluation) => {
        return evaluation.type === type
      })
    }
  },
  computed: {
    insideEvaluations: function () {
      return this.getEvaluationsByType('insideEvaluation')
    },
    outsideEvaluations: function () {
      return this.getEvaluationsByType('outsideEvaluation')
    },
    studentEvaluations: function () {
      return this.getEvaluationsByType('studentEvaluation')
    }
  }
}
</script>

<style lang="sass">
@import './style/common.sass'

#evaluation
  .el-tabs__item
    font-size: 20px
    height: 50px
    line-height: 50px
    padding: 0 20px
    
  .el-tab-pane
    padding-left: 20px
    padding-right: 20px

  h2
    font-size: 20px
</style>