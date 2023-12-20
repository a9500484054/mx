import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import CocktailDetail from '@/views/CocktailDetail.vue';


const drinks = [
  { path: 'margarita'},
  { path: 'mojito'},
  { path: 'a1'},
  { path: 'kir'},
];

const routes = [
  {
    path: '/',
    redirect: '/margarita'
  },
  ...drinks.map((drink) => ({
    path: `/${drink.path}`,
    component: CocktailDetail,
  })),
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
]   

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const code = to.path.replace('/','');
  store.dispatch('fetchCocktail', code);
  next();
});
  



export default router;
