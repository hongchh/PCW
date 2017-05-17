import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Management from '../components/Management'
import AccountManagement from '../components/account/AccountManagement'
import CourseManagement from '../components/course/CourseManagement'
import HomeManagement from '../components/home/HomeManagement'

export default new Router({
  mode: 'history',
  routes: [{
    path: '/management',
    component: Management,
    children: [
      { path: 'account', component: AccountManagement },
      { path: 'course', component: CourseManagement },
      { path: 'home', component: HomeManagement },
      { path: '*', redirect: 'home' }
    ]
  }, {
    path: '*',
    redirect: '/management'
  }]
})
