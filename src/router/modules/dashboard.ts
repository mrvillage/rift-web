import restrictedCheck from "@/router/checks";
export default [
  {
    path: "/dashboard/me",
    alias: "/dashboard",
    component: () => import("@/views/MyDashboard.vue"),
    beforeEnter: restrictedCheck,
    children: [
      {
        path: "",
        component: () => import("@/views/MyDashboardViews/Root.vue"),
      },
      {
        path: "general",
        name: "General - My Dashboard",
        component: () => import("@/views/MyDashboardViews/General.vue"),
      },
    ],
  },
  {
    path: "/dashboard/server",
    component: () => import("@/views/GuildDashboard.vue"),
    beforeEnter: restrictedCheck,
    children: [
      {
        path: "",
        component: () => import("@/views/GuildDashboardViews/Root.vue"),
      },
    ],
  },
  {
    path: "/dashboard/alliance",
    component: () => import("@/views/AllianceDashboard.vue"),
    beforeEnter: restrictedCheck,
    children: [],
  },
];
