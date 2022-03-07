<template>
  <b-container class="bv-example-row">
    <div class="row">
      
    
    <b-col md="12">
        <router-link class="btn btn-warning float-left" to="/RentResidence"> Rent </router-link>
        <router-link class="btn btn-warning float-left" to="/Resdetails/1"> Sell </router-link>

    </b-col>
    <b-col>
    <b-row style="margin:auto" >
   <div v-for="item in Residences" class="ca" v-bind:key="item.name">

      <b-card
        title="Card Title"
        :img-src="item.Photo"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; margin: 1%"
        class="mb-2"
      >
        <b-card-text>
          
         <i class="fas fa-euro-sign    "></i> {{item.price}}
          {{item.bathroom}}
          {{item.LivingRoom}}
        </b-card-text>

        <router-link class="btn btn-outline-warning btn-block" to="/Resdetails/1">Details</router-link>
      </b-card>
      
      
           
   </div>
  
   </b-row>
    </b-col>
    </div>
  </b-container>
</template>
<style>
.btn {
  margin-left: 1%;
}

</style>
<script>
export default {
  data() {
    return {
      Residences: [
        { Photo: require("../assets/Properties.png"),price: "120",bathroom: "4",LivingRoom: "2" },
        { Photo: require("../assets/Properties.png"),price: "120",bathroom: "4",LivingRoom: "2" },
        { Photo: require("../assets/Properties.png"),price: "120",bathroom: "4",LivingRoom: "2" },
        { Photo: require("../assets/Properties.png"),price: "120",bathroom: "4",LivingRoom: "2" },
        { Photo: require("../assets/Properties.png"),price: "120",bathroom: "4",LivingRoom: "2" },
        { Photo: require("../assets/Properties.png"),price: "120",bathroom: "4",LivingRoom: "2" },
      ],
    };
  },
};
</script>
