import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import Info from './Info.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/info', component: Info },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
