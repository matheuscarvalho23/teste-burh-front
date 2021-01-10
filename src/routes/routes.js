import Vue from "vue";
import Router from "vue-router";

import Register from "../pages/Register.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Register,
    }
  ]
});

export default router;