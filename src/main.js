import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft, faArrowCircleRight, faBell, faEdit, faHome, faSignOutAlt, faTrashAlt, faUserGraduate, faUserSecret, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin, } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import Vuelidate from 'vuelidate'



library.add(
  faUserSecret, 
  faUserGraduate, 
  faUserTie, 
  faBell, 
  faSignOutAlt, 
  faHome, 
  faArrowCircleRight, 
  faArrowCircleLeft,
  faEdit,
  faTrashAlt,
  )
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
