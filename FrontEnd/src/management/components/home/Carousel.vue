<template lang="pug">
md-card#carousel
  md-card-header
    div.md-title 轮播图
    div.md-subhead 上传文件修改图片
  md-card-content
    md-layout(md-gutter)
      md-layout(md-column md-gutter)
        md-layout.carousel-img
          md-card
            md-card-media
              img(src="../../assets/slide/0.png" alt="轮播图-1")
        md-layout.carousel-img
          md-card
            md-card-media
              img(src="../../assets/slide/2.png" alt="轮播图-3")
      md-layout(md-column md-gutter)
        md-layout.carousel-img
          md-card
            md-card-media
              img(src="../../assets/slide/1.png" alt="轮播图-2")
        md-layout.carousel-img
          md-card
            md-card-media
              img(src="../../assets/slide/3.png" alt="轮播图-4")
    md-layout(md-gutter)
      md-layout(md-column md-gutter)
        md-input-container
          label 更新图片1
          md-file(v-model="files[0]")
      md-layout(md-column md-gutter)
        md-input-container
          label 更新图片2
          md-file(v-model="files[1]")
      md-layout(md-column md-gutter)
        md-input-container
          label 更新图片3
          md-file(v-model="files[2]")
      md-layout(md-column md-gutter)
        md-input-container
          label 更新图片4
          md-file(v-model="files[3]")
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      files: [null, null, null, null]
    }
  }
}
</script>

<style lang="sass">
#carousel .md-card-content
  .carousel-img
    padding: 5px
    .md-card-media
      height: 100%
      img
        height: 100%
  .md-input-container
    padding-right: 16px
</style>
