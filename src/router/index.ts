import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes: any[] = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
