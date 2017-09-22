import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Account from '../components/account/Account'
import Course from '../components/course/Course'
import CourseFile from '../components/course/CourseFile'
import Introduction from '../components/course/Introduction'
import SecondClass from '../components/course/SecondClass'
import Home from '../components/home/Home'

export default new Router({
  routes: [
    { path: '/account', component: Account },
    {
      path: '/course',
      component: Course,
      children: [
        { path: 'course-file', component: CourseFile },
        { path: 'introduction', component: Introduction },
        { path: 'second-class', component: SecondClass },
        { path: '', redirect: 'introduction' }
      ]
    },
    { path: '/home', component: Home },
    { path: '*', redirect: '/home' }
  ]
})
