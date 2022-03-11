import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainLayout from "@/components/MainLayout.vue";
import TaskList from "@/views/TaskList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
    children: [
      {
        path: "/task-list",
        name: "TaskList",
        component: TaskList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
