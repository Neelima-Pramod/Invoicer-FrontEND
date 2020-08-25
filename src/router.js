import Vue from 'vue'
import Router from 'vue-router'
import DisplayJson from './views/DisplayJson'
import Register from './views/Register'
import AddInvoice from './views/AddInvoice'
import ViewBiller from './views/ViewBiller'
import Dashboard from './views/Dashboard'
import InvoiceForm from './views/InvoiceForm'
import Channel from './views/Channel'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/api/login',
      name: 'DisplayJson',
      component: DisplayJson
    },
    {
      path: '/api/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/viewbiller',
      name: 'ViewBiller',
      component: ViewBiller,

    },  
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path:'',
          component:AddInvoice
        },
        {
          path:'add-invoice',
          component:AddInvoice
        },
        {
          path:'invoice-form',
          component:InvoiceForm
        },
        {
          path:'/channel',
          component:Channel
        }
      ]
    }

  ]
})


