import Vue from 'vue'
import router from './router/index'
import store from './store/store'
import App from './App.vue'




Vue.filter('toRUB', function(value){
	if (!value) return ''
	return parseFloat(value) + " руб"
});
Vue.filter('phone', function (phone) {
	if (!phone) return ''
    return phone.toString().replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
});



import HEADER from './components/header/header.vue'
Vue.component('HEADER', HEADER);

import flats from './components/flats/flats.vue'
Vue.component('flats', flats);

import renting from './components/renting/renting.vue'
Vue.component('renting', renting);

import myclients from './components/myclients/myclients.vue'
Vue.component('myclients', myclients);

import sendData from './components/sendData.vue'
Vue.component('sendData', sendData);

import modalAbout from './components/aboutModalWindow.vue'
Vue.component('modal-about', modalAbout)





new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
})


















