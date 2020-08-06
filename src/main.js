import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import VueRouter from 'vue-router'
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
Vue.component('fai', FontAwesomeIcon);

Vue.use(VueRouter)
Vue.use(Buefy, {
  defaultIconComponent: "fai",
  defaultIconPack: "fas",
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "1x",
        "is-medium": "2x",
        "is-large": "3x"
      },
      iconPrefix: ""
    }
  }
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// new Vue({
//   router
// }).$mount('#app')