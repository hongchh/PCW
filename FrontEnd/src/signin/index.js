import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import {
  Input,
  Button,
  Form,
  FormItem,
  Row,
  Col
} from 'element-ui'

Vue.use(Input)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
