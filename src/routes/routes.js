import Vue from "vue";
import Router from "vue-router";

import Register from "../pages/Register.vue";
import Pets from "../pages/Pets.vue";
import Edit from "../pages/Edit.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Register",
      path: '/',
      component: Register,
      meta: {
        title: "The Pet's › Register",
      },
    },
    {
      name: "Pets",
      path: '/pets',
      component: Pets,
      meta: {
        title: "The Pet's › Pets",
      },
    },
    {
      name: "Editar Pets",
      path: '/edit/:id',
      component: Edit,
      meta: {
        title: "The Pet's › Editar Pet",
      },
    },
  ]
});

export default router;