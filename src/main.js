import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from '../store'


Vue.filter('toRUB', function(value){
	if (!value) return ''
	return parseFloat(value) + " руб"
});
Vue.filter('phone', function (phone) {
	if (!phone) return ''
    return phone.toString().replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
});



import HEADER from '../components/header/header.vue'
Vue.component('HEADER', HEADER);

import flats from '../components/flats/flats-filter-table.vue'
Vue.component('flats', flats);

import renting from '../components/renting/renting-filter-table.vue'
Vue.component('renting', renting);

import myclients from '../components/myclients/myclients-filter-table.vue'
Vue.component('myclients', myclients);

Vue.use(VueRouter);



const routes = [
	{path:'/', component:flats},
	{path:'/renting', component:renting},
	{path:'/flats', component:flats},
	{path:'/myclients', component:myclients}
];

const router = new VueRouter({
	mode: 'history',
	routes
});



new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  store:store
})


















