import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/components/About.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/components/Landing.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("@/components/Resume.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("@/components/Skills.vue"),
  },
  {
    path: "/landing",
    name: "landing",
    component: () => import("@/components/Landing.vue"),
  },
  {
    path: "/testimonials",
    name: "testimonials",
    component: () => import("@/components/Testimonials.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
