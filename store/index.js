import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state:{
        isFlats:true,
        isRenting:false,
        isMyclients:false
    },
    mutations:{
        showFlats(){
            isFlats:true;
            isRenting:false;
            isMyclients:false;

        },
        showRenting(){
            isFlats:false;
            isRenting:true;
            isMyclients:false;
;           
        },
        showMyclients(){
            isFlats:false;
            isRenting:false;
            isMyclients:true;

        }

    }
})
export default store