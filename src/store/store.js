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
    mycl:[],
    dataForAboutWindow:[]
  },
  actions:{

  },
  mutations:{
    putInMycl(state,id){
      // метод для добавления клиентов из "Арендующих" в "Мои Клиенты"
      state.rent.forEach(function(rentItem){
        if(rentItem.id == id){
          state.mycl.push(rentItem)
        }
      })
      return state.mycl;
    },
    getOriginalFlats(state){
      // очистка фильтра комнат
      return state.flats = FLATS 
    },
    getOneRoom(state, room){
      // для фильтра комнат
      var array = [];
      state.flats.map(function(item){  
        if(item.room_count == room){  
          array.push(item)
        }
      })
      state.flats = array;
    },
    sendDataToAboutWindow(state, id){
      // метод чтобы запушить данные в модальное окно 
      state.dataForAboutWindow = [];
      state.flats.map(function(item){
        if(id == item.id){
           state.dataForAboutWindow.push(item)
        }
      })
    }
  },
  getters:{
    flatsResult(state){
      // возвращает все данные о "Квартирах"
      return state.flats
    },
    rentResult(state){
      //  возвращает все данные о "Арендующих"
      return state.rent
    },
    myclResult(state){
      // Возвращает все данные о "Моих Клиентах" 
      // Изначально массив пустой
      return state.mycl
    },
    AboutWindowResult(state){
      // данные для модального окна
      return state.dataForAboutWindow
    }
    
  }
})

