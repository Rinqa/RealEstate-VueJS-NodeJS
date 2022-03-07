<template>
  <b-container class="bv-example-row">
    
     
    <b-row style="margin:auto" >
   <div v-for="item in Properties" v-bind:key="item.name">

      <b-card
        :title="item.City"
        :sub-title="item.Location"
        :img-src="item.Photo"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; margin: 1%"
        class="mb-2"
      >
        <b-card-text>
          
          {{item.price}}
          {{item.bathroom}}
          {{item.LivingRoom}}
          {{item.Agents}}
        </b-card-text>

        <b-button href="#" variant="primary">Details</b-button>
      </b-card>
    
   </div>
  
   </b-row>
  </b-container>
</template>

<script>


export default ({
   data() {
    return {
      
      Properties: [
        { Photo: require('../assets/Properties.jpg'),price: '120m2',City:"Prishtina",Location:"Gjilan",bathroom:"4",LivingRoom:"2",Agents:"Rinor Biqku"},
         { Photo: require('../assets/Properties.jpg'),price: '120m2',City:"Prishtina",Location:"Gjilan",bathroom:"4",LivingRoom:"2"},
         { Photo: require('../assets/Properties.jpg'),price: '120m2',City:"Prishtina",Location:"Gjilan",bathroom:"4",LivingRoom:"2"},
      ]
    }
  },
})
</script>
