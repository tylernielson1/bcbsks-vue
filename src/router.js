import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Playground from './views/Playground';
import PayeesList from './views/PayeesList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/playground',
      name: 'playground',
      component: Playground,
    },
    {
      path: '/payees-list',
      name: 'payees-list',
      component: PayeesList,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
