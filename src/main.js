import Vue from 'vue'
import App from './App.vue'
import VueNoty from "vuejs-noty";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(VueNoty, {
  theme: "sunset",
});
Vue.use(VueNoty);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
