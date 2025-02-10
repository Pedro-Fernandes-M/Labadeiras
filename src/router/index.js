import PrevisionView from "@/views/PrevisionView.vue";
import YearView from "@/views/YearView.vue";
import DayView from "../views/DayView.vue";
import AutoLogin from "@/views/AutoLogin.vue";

import { createRouter, createWebHistory } from "vue-router";
import store from "@/store"; 


const routes = [
  {
    path: "/",
    name: "login",
    component: AutoLogin,
  },
  {
    path: "/day",
    name: "day",
    component: DayView,
    meta: { requiresAuth: true }
  },
  {
    path: "/year",
    name: "year",
    component: YearView,
    meta: { requiresAuth: true }
  },
  {
    path: "/previsions",
    name: "previsions",
    component: PrevisionView,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.auth; // Get authentication status

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: "login" }); // Redirect to login if not authenticated
    } else {
      next(); // Proceed if authenticated
    }
  } else {
    next(); // Always allow access to non-protected routes
  }
});

export default router;
