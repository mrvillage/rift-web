import Vue from "vue";
import VueRouter, { RouteConfig, Route, NavigationGuardNext } from "vue-router";
import Landing from "../views/Landing.vue";
import store from "../store";

Vue.use(VueRouter);

const restrictedCheck = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (store.getters.supabase.auth.user()) {
    next();
  } else {
    router.replace({ name: "Landing", params: { errorCode: "103" } });
  }
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
    beforeEnter: restrictedCheck,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    beforeEnter: restrictedCheck,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
