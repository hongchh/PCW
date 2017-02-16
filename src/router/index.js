import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../components/main/Main'
import Home from '../components/main/home/Home'
import CourseArrangement from '../components/main/course/CourseArrangement'
import CourseIntroduction from '../components/main/course/CourseIntroduction'
import CourseRequirements from '../components/main/course/CourseRequirements'
import TeachingMethod from '../components/main/course/TeachingMethod'
import TeachingPlan from '../components/main/course/TeachingPlan'
import TeachingTeam from '../components/main/course/TeachingTeam'
import Courseware from '../components/main/resources/Courseware'
import ProblemSet from '../components/main/resources/ProblemSet'
import TeachingMaterial from '../components/main/resources/TeachingMaterial'
import TeachingVideo from '../components/main/resources/TeachingVideo'
import Vocabulary from '../components/main/resources/Vocabulary'
import Achievements from '../components/main/achievement/Achievements'
import Evaluation from '../components/main/achievement/Evaluation'
import Honor from '../components/main/achievement/Honor'
import Interaction from '../components/main/interaction/Interaction'

import Management from '../components/management/Management'
import AccountManagement from '../components/management/account/AccountManagement'
import CourseManagement from '../components/management/course/CourseManagement'
import HomeManagement from '../components/management/home/HomeManagement'

import Signin from '../components/signin/Signin'

export default new Router({
  mode: 'history',
  routes: [{
    path: '/main',
    component: Main,
    children: [
      { path: 'home', component: Home },
      { path: 'course-arrangement', component: CourseArrangement },
      { path: 'course-introduction', component: CourseIntroduction },
      { path: 'course-requirements', component: CourseRequirements },
      { path: 'teaching-method', component: TeachingMethod },
      { path: 'teaching-plan', component: TeachingPlan },
      { path: 'teaching-team', component: TeachingTeam },
      { path: 'courseware', component: Courseware },
      { path: 'problem-set', component: ProblemSet },
      { path: 'teaching-material', component: TeachingMaterial },
      { path: 'teaching-video', component: TeachingVideo },
      { path: 'vocabulary', component: Vocabulary },
      { path: 'achievements', component: Achievements },
      { path: 'evaluation', component: Evaluation },
      { path: 'honor', component: Honor },
      { path: 'interaction', component: Interaction },
      { path: '', redirect: 'home' }
    ]
  }, {
    path: '/management',
    component: Management,
    children: [
      { path: 'account', component: AccountManagement },
      { path: 'course', component: CourseManagement },
      { path: 'home', component: HomeManagement },
      { path: '', redirect: 'home' }
    ]
  }, {
    path: '/signin',
    component: Signin
  }, {
    path: '/',
    redirect: '/main/home'
  }]
})
