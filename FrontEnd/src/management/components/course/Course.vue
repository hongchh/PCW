<template lang="pug">
div#course
  md-speed-dial.md-fab-top-left(md-open="hover", md-direction="right", md-theme="light-blue")
    md-button.md-fab(md-fab-trigger)
      md-icon(md-icon-morph) event
      md-icon add
    md-button.md-fab.md-primary.md-mini.md-clean(@click.native="$router.replace('/course/introduction')")
      md-icon add
      md-tooltip(md-direction="top") 课程介绍
    md-button.md-fab.md-primary.md-mini.md-clean(@click.native="$router.replace('/course/course-file')")
      md-icon add
      md-tooltip(md-direction="top") 文件管理
    md-button.md-fab.md-primary.md-mini.md-clean(@click.native="$router.replace('/course/second-class')")
      md-icon add
      md-tooltip(md-direction="top") 第二课堂
  div#course-body
    router-view
</template>

<script>
export default {
  name: 'course'
}
</script>

<style lang="sass">
#course-body
  margin-top: 100px
</style>

