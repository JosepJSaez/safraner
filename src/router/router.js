import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import About from "../views/sobreJsaez.vue";
import Blog from "../views/blog.vue";
import Contacto from "../views/contacto.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/sobreJsaez", component: About },
  { path: "/blog", component: Blog },
  { path: "/contacto", component: Contacto }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;