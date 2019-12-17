import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '../components/Welcome.vue';
import EnergyPlans from '../components/EnergyPlans.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/energyplans',
      name: 'EnergyPlans',
      component: EnergyPlans,
    },
  ],
});
