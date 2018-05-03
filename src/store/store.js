import Vue from 'vue'
import Vuex from 'vuex'

import FLATS from './data.js'
import RENT from './rent-data.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    flats:FLATS,
    rent:RENT,
    oneRoom:[],
    mycl:[]
  },
  actions:{

  },
  mutations:{
    putInMycl(state,){
      state.rent.map(function(item){
        state.mycl.push(item);   
      })
      return state.mycl;
    },
    getOriginalFlats(state){
      return state.flats = FLATS 
    },
    getOneRoom(state, room){
      var array = [];
      state.flats.map(function(item){  
        if(item.room_count == room){  
          array.push(item)
        }
      })
      state.flats = array;
    }
  },
  getters:{
    flatsResult(state){
      return state.flats
    },
    rentResult(state){
      return state.rent
    },
    myclResult(state){
      return state.mycl
    }
    
  }
})

