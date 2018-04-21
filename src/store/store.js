import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    isflats:true,
    isrent:false,
    ismycl:false
  },
  getters:{
    flats(state){
      return state.isflats;
    },
    renting(state){
      return state.isrent;
    },
    mycl(state){
      return state.ismycl;
    }
  },
  mutations:{
    changeFlats(state){
      state.isflats = true;
      state.isrent = false;
      state.ismycl = false;
    },
    changeRenting(state){
      state.isflats = false;
      state.isrent = true;
      state.ismycl = false;
    },
    changeMycl(state){
      state.isflats = false;
      state.isrent = false;
      state.ismycl = true;
    }
  }
})

export default store