import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Playground from './views/Playground';
import PayeesList from './views/PayeesList';
import Categories from './views/Categories';
import Payees from './views/Payees';
import People from './views/People';
import Transactions from './views/Transactions';
import PayeeDetails from './views/PayeeDetails';
import AddPayee from './views/AddPayee';

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
      path: '/categories',
      name: 'categories',
      component: Categories,
    },
    {
      path: '/payees',
      component: Payees,
      children: [
        {
          path: 'list',
          component: PayeesList,
          name:'payees-list'
        },
        {
          path: 'add',
          component: AddPayee,
          name:'payee-add'
        },
        {
          path: 'details/:id',
          component: PayeeDetails,
          name: 'payee-details',
          props: true
        },
        {
          path: '',
          name: 'payees',
          redirect: 'list',
        },
      ],
    },
    {
      path: '/people',
      name: 'people',
      component: People,
    },
    {
      path: '/tx',
      name: 'transactions',
      component: Transactions,
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
