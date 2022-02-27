<template>
  <b-container-fluid class="bv-example-row">
    
     
    <b-row style="margin:auto" >
   <div v-for="item in Residences" v-bind:key="item.name">

      <b-card
        title="Card Title"
        :img-src=item.Photo
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
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    
   </div>
  
   </b-row>
  <img src="../../public/Media/logo.png"/>

  </b-container-fluid>
</template>

<script>


export default ({
   data() {
    return {
      
      Residences: [
        { Photo: '../../public/Media/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"},
        { Photo: '../assets/logo.png', price: '120m2',bathroom:"4",LivingRoom:"2"}  
      ]
    }
  },
})
</script>
