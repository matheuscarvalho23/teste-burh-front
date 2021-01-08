import Vue from 'vue'
import App from './App.vue'
import VueNoty from "vuejs-noty";

Vue.config.productionTip = false;

Vue.use(VueNoty, {
  theme: "sunset",
});
Vue.use(VueNoty);

new Vue({
  render: h => h(App),
}).$mount('#app')
