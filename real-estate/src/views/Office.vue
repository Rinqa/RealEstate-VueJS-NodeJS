<template>
  <b-container class="bv-example-row">
    
     
    <b-row style="margin:auto" >
   <div v-for="item in Residences" v-bind:key="item.name">

      <b-card
        :title="item.city"
        :sub-title="item.location"
        :img-src="item.Photo"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; margin: 1%"
        class="mb-2"
      >
        <b-card-text>
            {{item.price}}
        </b-card-text>

        <b-button href="#" variant="primary"><router-link to="/Office/1"></router-link></b-button>
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
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',bathroom:"4",LivingRoom:"2"},
      ]
    }
  },
})
</script>
