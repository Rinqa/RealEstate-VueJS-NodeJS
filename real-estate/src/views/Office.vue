<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-link class="btn btn-warning float-left" to="/RentResidence">
          Rent
        </router-link>
        <router-link class="btn btn-warning float-left" to="/Resdetails/1">
          Sell
        </router-link>
         <router-link class="btn btn-warning float-right" to="/AddOffice">
          Add
        </router-link>
      </div>
      <div class="col-md">
        <div class="row" style="margin: auto">
          <div v-for="item in Office" class="ca" v-bind:key="item.name">
            <b-card
              :title="item.price"
              :img-src="item.Photo"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; margin: 1%"
              class="mb-2"
            >
              <b-card-text>
                <i class="fa fa-map-pin" aria-hidden="true"></i>
                {{item.city}}<br>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                {{ item.location }}
                
                <br>
                <i class="fa fa-user" aria-hidden="true"></i>
                {{ item.Agent }}
              </b-card-text>

              <router-link
                class="btn btn-outline-warning btn-block"
                to="/Office/1"
                >Details</router-link
              >
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btn {
  margin: 1%;
}
.container{
  margin: auto;
  padding: auto;
}
.ca{
 margin:auto;
}
</style>
<script>
export default {
  data() {
    return {
       Office: [
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m2',Agent:"Albin Sylemani"},
      ]
    };
  },
};
</script>
