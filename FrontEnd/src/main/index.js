import Vue from 'vue'
import {
  Dialog,
  Input,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Tag,
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem
} from 'element-ui'

Vue.use(Dialog)
Vue.use(Input)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)

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
