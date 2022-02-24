<template>
  
  <div id="app">
      
      <app-home ></app-home>
      <app-residence></app-residence>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Residence from './components/Residence.vue'
export default {
  name: 'App',
  components: {
    'app-home':Home,
    'app-residence':Residence,
  },
  data:function(){
    return{
    selectedComponent:'app-about',
    web: ['HTML','PHP','Javascript','VueJS']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
