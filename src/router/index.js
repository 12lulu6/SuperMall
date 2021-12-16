import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/",
    redirect: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/sort",
    name: "sort",
    component: () => import("../views/Sort/Sort.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart/Cart.vue"),
  },
  {
    path: "/me",
    name: "me",
    component: () => import("../views/Me/Me.vue"),
  },
  {
    path: "/detail/:iid",
    name: "detail",
    component: () => import("../views/Detail/Detail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
