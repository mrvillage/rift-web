import Vue from "vue";
import VueRouter, { RouteConfig, Route, NavigationGuardNext } from "vue-router";
import Landing from "../views/Landing.vue";
import store from "../store";
import modules from "@/router/modules";

Vue.use(VueRouter);
import restrictedCheck from "@/router/checks";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  ...modules,
  {
    path: "*",
    name: "Not Found",
    redirect: { name: "Landing", params: { errorCode: "404" } },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
