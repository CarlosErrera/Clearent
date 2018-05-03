import Vue from 'vue'
import VueRouter from 'vue-router'  

import renting from './../components/renting/renting.vue'
import myclients from './../components/myclients/myclients.vue'
import flats from './../components/flats/flats.vue'
import modalAbout from './../components/aboutModalWindow.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:flats
        },
        {
            path:'/flats',
            component:flats
        },
        {
            path:'/renting',
            component:renting
        },
        {
            path:'/myclients',
            component:myclients
        }
    ]
})