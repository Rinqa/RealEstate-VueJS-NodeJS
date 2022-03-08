<template>
  <b-container class="bv-example-row">
    
     
    <b-row style="margin:0px 0px 0px 0px" >
   <div v-for="item in Residences" v-bind:key="item.name">

      <b-card
        :title="item.name"
        :sub-title="item.city"
        :sub-title2="item.city"
        :img-src="item.Photo"
        img-alt="Image"
        img-top
        tag="item.availability"
        style="max-width: 20rem; margin: 1%"
        class="mb-2"
      >
        <b-card-text style="color: red">
            {{item.availability}}
        </b-card-text>

        <router-link class="btn btn-outline-warning btn-block" to="/AgentDetails/1">Details</router-link>
      </b-card>
    
   </div>
  
   </b-row>
  </b-container>
</template>

<script>


export default ({
   data() {
    return {
      
      Residences: [
        { Photo: require('../assets/Images/agent.png'), name:"Albin Sylejmani", city:"Gjilan", availability:"Free"},
        { Photo: require('../assets/Images/agent.png'), name:"Rinor Biçku", city:"Gjilan", availability:"Busy"},
        { Photo: require('../assets/Images/agent.png'), name:"Dion Rama", city:"Gjilan", availability:"Free"},
        { Photo: require('../assets/Images/agent.png'), name:"Albin Ymeri", city:"Gjilan", availability:"Busy"},
        { Photo: require('../assets/Images/agent.png'), name:"Filan Fisteku", city:"Gjilan", availability:"Free"},
        { Photo: require('../assets/Images/agent.png'), name:"Fistek Filani", city:"Gjilan", availability:"Busy"},
        { Photo: require('../assets/Images/agent.png'), name:"Mos", city:"Gjilan", availability:"Free"},
        { Photo: require('../assets/Images/agent.png'), name:"U", city:"Gjilan", availability:"Busy"},
        { Photo: require('../assets/Images/agent.png'), name:"Merakos", city:"Gjilan", availability:"Free"},
      ]
    }
  },
})
</script>
