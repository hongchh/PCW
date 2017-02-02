import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../components/main/Main'
import Management from '../components/management/Management'
import Signin from '../components/signin/Signin'

export default new Router({
  mode: 'history',
  routes: [{
    path: '/main',
    component: Main
  }, {
    path: '/management',
    component: Management
  }, {
    path: '/signin',
    component: Signin
  }, {
    path: '/',
    redirect: '/main'
  }]
})
