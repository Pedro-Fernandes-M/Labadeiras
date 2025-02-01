import PrevisionView from "@/views/PrevisionView.vue";
import YearView from "@/views/YearView.vue";
import DayView from "../views/DayView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "day",
    component: DayView,
  },
  {
    path: "/year",
    name: "year",
    component: YearView,
  },
  {
    path: "/previsions",
    name: "previsions",
    component: PrevisionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
