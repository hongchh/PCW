<template lang="pug">
div#teaching-material
  el-row(type="flex", justify="center")
    el-col(:span="20")
      h2 现用教材
      ol
        li(v-for="material in presentMaterials") {{ material.description }}
      img(src='../../assets/books.jpg')
      h2 主编教材
      ol
        li(v-for="material in editorMaterials") {{ material.description }}
      h2 主审教材
      ol
        li(v-for="material in reviewerMaterials") {{ material.description }}
      h2 参编教材
      ol
        li(v-for="material in participatedMaterials") {{ material.description }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'teaching-material',
  data () {
    return {
      teachingMaterials: []
    }
  },
  created () {
    axios.get('/data/teaching-material.json')
      .then(res => {
        if (res.status === 200) {
          this.teachingMaterials = res.data
        }
      })
  },
  computed: {
    presentMaterials: function () {
      return this.getMaterialsByType('present')
    },
    editorMaterials: function () {
      return this.getMaterialsByType('editor')
    },
    reviewerMaterials: function () {
      return this.getMaterialsByType('reviewer')
    },
    participatedMaterials: function () {
      return this.getMaterialsByType('participated')
    }
  },
  methods: {
    getMaterialsByType: function (type) {
      return this.teachingMaterials.filter((material) => {
        return material.type === type
      })
    }
  }
}
</script>

<style lang="sass">
#teaching-material
  h2
    padding-bottom: 10px
    border-bottom: 1px solid #eeeeee
    font-weight: 400
    font-size: 24px
    color: #1f2f3d

  ol
    margin-top: 10px
    margin-bottom: 10px
  
  li
    padding-top: 8px
    padding-bottom: 8px
</style>