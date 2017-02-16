<template lang="pug">
div#course-management
  el-tabs(v-model="activeName")
    el-tab-pane(label="课程介绍" name="courseIntroduction")
      course-introduction-management
    el-tab-pane(label="课程要求" name="courseRequirements")
      course-requirement-management
    el-tab-pane(label="课程安排" name="courseArrangement")
      course-arrangement-management
    el-tab-pane(label="教学大纲" name="TeachingPlan")
      teaching-plan-management
    el-tab-pane(label="教学方法" name="TeachingMethod")
      teaching-method-management
</template>

<script>
import CourseIntroductionManagement from './CourseIntroductionManagement'
import CourseRequirementManagement from './CourseRequirementManagement'
import CourseArrangementManagement from './CourseArrangementManagement'
import TeachingPlanManagement from './TeachingPlanManagement'
import TeachingMethodManagement from './TeachingMethodManagement'

export default {
  name: 'course-management',
  components: {
    CourseIntroductionManagement,
    CourseRequirementManagement,
    CourseArrangementManagement,
    TeachingPlanManagement,
    TeachingMethodManagement
  }
}
</script>

<style lang="sass">
#course-management
  padding: 20px
</style>
