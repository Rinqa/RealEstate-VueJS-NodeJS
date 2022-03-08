<template>
  <b-container class="bv-example-row">
    
     
    <b-row style="margin:auto" >
       <div class="col-md-12">
       
         <router-link class="btn btn-warning float-right" to="/AddProperties">
          Add
        </router-link>
      </div>
   <div v-for="item in Properties" v-bind:key="item.name">

      <b-card
        :title="item.Price"
        :img-src="item.Photo"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; margin: 1%"
        class="mb-2"
      >
        <b-card-text>
          
          <i class="fa fa-map-pin" aria-hidden="true"></i> {{item.City}}<br>
          <i class="fa fa-map-marker  "></i> {{item.Location}}
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
        { Photo: require('../assets/Properties.jpg'),Price: '120 €/m2',City:"Prishtina",Location:"Zija shemsiu",Agents:"Rinor Biqku"},
      ]
    }
  },
})
</script>
