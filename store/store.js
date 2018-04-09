import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({

  state:{
    isflats:true,
    isRenting:false,
    isMyclients:false
  },

  actions:{},
  mutations:{
    getFlats(state){
      state.isflats = true;
      state.isRenting = false;
      state.isMyclients  =false;
    },
    getRenting(state){
      state.isflats = false;
      state.isRenting = true;
      state.isMyclients  =false;
    },
    getMyclients(state){
      state.isflats = false;
      state.isRenting = false;
      state.isMyclients = true;     
    }
  },
  getters:{
    flats(state){
      return state.isflats;
    },
    renting(state){
      return state.isRenting;
    },
    myClients(state){
      return state.isMyclients;
    }
  }
})

export default store