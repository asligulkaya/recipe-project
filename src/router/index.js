import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipe/:id/:slug",
    name: "recipe.show",
    component: () => import("@/views/RecipeShow.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutUs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Sayfa geçmişi varsa, o konuma kaydır
      return savedPosition;
    } else {
      // Sayfa geçmişi yoksa, yukarıya doğru kaydır
      return { top: 0 };
    }
  },
});

export default router;
