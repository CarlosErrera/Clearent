<template>
  <div id="app">
    
    <HEADER></HEADER>
    
    <!-- <transition name="fade">
    	<router-view></router-view>
    </transition> -->

    <flats v-if="flats"></flats>

    <renting v-if="renting"></renting>

    <myclients v-if="myclients"></myclients>

  </div>
</template>

<script>
import store from '../store/store'

export default{

  data(){
    return{

    }
  },
  computed:{
    flats(){
      return store.getters.flats;
    },
    renting(){
      return store.getters.renting;
    },
    myclients(){
      return store.getters.myclients;
    }
  }


}


</script>

<style src="./main.css"></style>
