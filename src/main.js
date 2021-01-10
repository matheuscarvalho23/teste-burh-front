import Vue from 'vue'
import App from './App.vue'
import VueNoty from "vuejs-noty";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import router from "../src/routes/routes";

Vue.config.productionTip = false;

Vue.use(VueNoty, {
  theme: "sunset",
});
Vue.use(VueNoty);
Vue.use(Vuelidate);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
