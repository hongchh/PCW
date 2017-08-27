import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Account from '../components/account/Account'
import Course from '../components/course/Course'
import Home from '../components/home/Home'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/account', component: Account },
    { path: '/course', component: Course },
    { path: '/home', component: Home },
    { path: '*', redirect: '/home' }
  ]
})
