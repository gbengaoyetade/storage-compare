import { createWebHistory, createRouter } from "vue-router";
import IndexedDb from "../pages/IndexedDb.vue";
import LocalStorage from "../pages/LocalStorage.vue";
import Home from '../pages/Home.vue';

const routes = [
   {
    path: "/local",
    name: "Home",
    component: Home,
  },
  {
    path: "/indexed",
    name: "IndexedDb",
    component: IndexedDb,
  },
   {
    path: "/local",
    name: "LocalStorage",
    component: LocalStorage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
