import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home/Home'
import NotificationContent from '../components/home/NotificationContent'
import NotificationList from '../components/home/NotificationList'
import CourseIntroduction from '../components/course/CourseIntroduction'
import PBLTeaching from '../components/course/PBLTeaching'
import SecondClass from '../components/course/SecondClass'
import SimTeaching from '../components/course/SimTeaching'
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
import ResearchGuidance from '../components/achievement/ResearchGuidance'
// import Interaction from '../components/interaction/Interaction'
// import Comment from '../components/interaction/Comment'

export default new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/notification', component: NotificationContent },
    { path: '/notification-list', component: NotificationList },
    { path: '/course-introduction', component: CourseIntroduction },
    { path: '/pbl-teaching', component: PBLTeaching },
    { path: '/second-class', component: SecondClass },
    { path: '/sim-teaching', component: SimTeaching },
    { path: '/teaching-plan', component: TeachingPlan },
    { path: '/teaching-team', component: TeachingTeam },
    { path: '/courseware', component: Courseware },
    { path: '/problem-set', component: ProblemSet },
    { path: '/teaching-material', component: TeachingMaterial },
    { path: '/teaching-video', component: TeachingVideo },
    { path: '/vocabulary', component: Vocabulary },
    { path: '/achievements', component: Achievements },
    { path: '/evaluation', component: Evaluation },
    { path: '/honor', component: Honor },
    { path: '/research-guidance', component: ResearchGuidance },
    // { path: '/interaction', component: Interaction },
    // { path: '/interaction/:id', component: Comment },
    { path: '*', redirect: 'home' }
  ]
})
