<template>
  <div id="app">
    
    <HEADER></HEADER>
     
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>


  </div>
</template>

<script>



</script>

<style src="./main.css"></style>
