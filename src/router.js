import Vue from 'vue'
import Router from 'vue-router'
import DisplayJson from './components/DisplayJson'
import Register from './components/Register'
import ViewBiller from './components/ViewBiller'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'DisplayJson',
      component: DisplayJson
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ViewBiller',
      name: 'ViewBiller',
      component: ViewBiller
    }
  ]
})