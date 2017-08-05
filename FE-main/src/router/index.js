import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../components/Main'
import Home from '../components/home/Home'
import CourseIntroduction from '../components/course/CourseIntroduction'
import SecondClass from '../components/course/SecondClass'
import TeachingPlan from '../components/course/TeachingPlan'
import TeachingTeam from '../components/course/TeachingTeam'
import Courseware from '../components/resources/Courseware'
import ProblemSet from '../components/resources/ProblemSet'
import TeachingMaterial from '../components/resources/TeachingMaterial'
import TeachingVideo from '../components/resources/TeachingVideo'
import Vocabulary from '../components/resources/Vocabulary'
import Achievements from '../components/achievement/Achievements'
import Evaluation from '../components/achievement/Evaluation'
import Honor from '../components/achievement/Honor'
import Interaction from '../components/interaction/Interaction'
import Comment from '../components/interaction/Comment'

export default new Router({
  mode: 'history',
  routes: [{
    path: '/main',
    component: Main,
    children: [
      { path: 'home', component: Home },
      { path: 'course-introduction', component: CourseIntroduction },
      { path: 'second-class', component: SecondClass },
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
      { path: 'interaction/:id', component: Comment },
      { path: '*', redirect: 'home' }
    ]
  },
  { path: '*', redirect: '/main/home' }
  ]
})
