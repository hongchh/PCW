import Vue from 'vue'

// 下面是vue-materialmaterial所有组件的单独引用，开发过程中根据需要解注释相关组件即可

import 'vue-material/dist/components/mdCore/index.css'
import MdCore from 'vue-material/dist/components/mdCore'
Vue.use(MdCore)

// import 'vue-material/dist/components/mdAvatar/index.css'
// import MdAvatar from 'vue-material/dist/components/mdAvatar'
// Vue.use(MdAvatar)

import 'vue-material/dist/components/mdBackdrop/index.css'
import MdBackdrop from 'vue-material/dist/components/mdBackdrop'
Vue.use(MdBackdrop)

// import 'vue-material/dist/components/mdBottomBar/index.css'
// import MdBottomBar from 'vue-material/dist/components/mdBottomBar'
// Vue.use(MdBottomBar)

import 'vue-material/dist/components/mdButton/index.css'
import MdButton from 'vue-material/dist/components/mdButton'
Vue.use(MdButton)

// import 'vue-material/dist/components/mdButtonToggle/index.css'
// import MdButtonToggle from 'vue-material/dist/components/mdButtonToggle'
// Vue.use(MdButtonToggle)

import 'vue-material/dist/components/mdCard/index.css'
import MdCard from 'vue-material/dist/components/mdCard'
Vue.use(MdCard)

import 'vue-material/dist/components/mdCheckbox/index.css'
import MdCheckbox from 'vue-material/dist/components/mdCheckbox'
Vue.use(MdCheckbox)

// import 'vue-material/dist/components/mdChips/index.css'
// import MdChips from 'vue-material/dist/components/mdChips'
// Vue.use(MdChips)

import 'vue-material/dist/components/mdDialog/index.css'
import MdDialog from 'vue-material/dist/components/mdDialog'
Vue.use(MdDialog)

// import 'vue-material/dist/components/mdDivider/index.css'
// import MdDivider from 'vue-material/dist/components/mdDivider'
// Vue.use(MdDivider)

import 'vue-material/dist/components/mdFile/index.css'
import MdFile from 'vue-material/dist/components/mdFile'
Vue.use(MdFile)

import 'vue-material/dist/components/mdIcon/index.css'
import MdIcon from 'vue-material/dist/components/mdIcon'
Vue.use(MdIcon)

// import 'vue-material/dist/components/mdImage/index.css'
// import MdImage from 'vue-material/dist/components/mdImage'
// Vue.use(MdImage)

import 'vue-material/dist/components/mdInputContainer/index.css'
import MdInputContainer from 'vue-material/dist/components/mdInputContainer'
Vue.use(MdInputContainer)

import 'vue-material/dist/components/mdLayout/index.css'
import MdLayout from 'vue-material/dist/components/mdLayout'
Vue.use(MdLayout)

import 'vue-material/dist/components/mdList/index.css'
import MdList from 'vue-material/dist/components/mdList'
Vue.use(MdList)

// import 'vue-material/dist/components/mdMenu/index.css'
// import MdMenu from 'vue-material/dist/components/mdMenu'
// Vue.use(MdMenu)

// import 'vue-material/dist/components/mdOnboarding/index.css'
// import MdOnboarding from 'vue-material/dist/components/mdOnboarding'
// Vue.use(MdOnboarding)

// import 'vue-material/dist/components/mdProgress/index.css'
// import MdProgress from 'vue-material/dist/components/mdProgress'
// Vue.use(MdProgress)

// import 'vue-material/dist/components/mdRadio/index.css'
// import MdRadio from 'vue-material/dist/components/mdRadio'
// Vue.use(MdRadio)

// import 'vue-material/dist/components/mdRatingBar/index.css'
// import MdRatingBar from 'vue-material/dist/components/mdRatingBar'
// Vue.use(MdRatingBar)

// import 'vue-material/dist/components/mdSelect/index.css'
// import MdSelect from 'vue-material/dist/components/mdSelect'
// Vue.use(MdSelect)

import 'vue-material/dist/components/mdSidenav/index.css'
import MdSidenav from 'vue-material/dist/components/mdSidenav'
Vue.use(MdSidenav)

// import 'vue-material/dist/components/mdSnackbar/index.css'
// import MdSnackbar from 'vue-material/dist/components/mdSnackbar'
// Vue.use(MdSnackbar)

import 'vue-material/dist/components/mdSpeedDial/index.css'
import MdSpeedDial from 'vue-material/dist/components/mdSpeedDial'
Vue.use(MdSpeedDial)

// import 'vue-material/dist/components/mdSpinner/index.css'
// import MdSpinner from 'vue-material/dist/components/mdSpinner'
// Vue.use(MdSpinner)

// import 'vue-material/dist/components/mdStepper/index.css'
// import MdStepper from 'vue-material/dist/components/mdStepper'
// Vue.use(MdStepper)

// import 'vue-material/dist/components/mdSubheader/index.css'
// import MdSubheader from 'vue-material/dist/components/mdSubheader'
// Vue.use(MdSubheader)

// import 'vue-material/dist/components/mdSwitch/index.css'
// import MdSwitch from 'vue-material/dist/components/mdSwitch'
// Vue.use(MdSwitch)

import 'vue-material/dist/components/mdTable/index.css'
import MdTable from 'vue-material/dist/components/mdTable'
Vue.use(MdTable)

// import 'vue-material/dist/components/mdTabs/index.css'
// import MdTabs from 'vue-material/dist/components/mdTabs'
// Vue.use(MdTabs)

import 'vue-material/dist/components/mdToolbar/index.css'
import MdToolbar from 'vue-material/dist/components/mdToolbar'
Vue.use(MdToolbar)

import 'vue-material/dist/components/mdTooltip/index.css'
import MdTooltip from 'vue-material/dist/components/mdTooltip'
Vue.use(MdTooltip)

// import 'vue-material/dist/components/mdWhiteframe/index.css'
// import MdWhiteframe from 'vue-material/dist/components/mdWhiteframe'
// Vue.use(MdWhiteframe)

import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  router
})
