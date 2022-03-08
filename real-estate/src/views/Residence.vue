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
         <router-link class="btn btn-warning float-right" to="/AddResidence">
          Add
        </router-link>
      </div>
      <div class="col-md">
        <div class="row" style="margin: auto">
          <div v-for="item in Residences" class="ca" v-bind:key="item.name">
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
                {{ item.City }}
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                {{ item.Location }}
                <br />
                <i class="fa-solid fa-ruler-combined"></i>
                {{ item.Squaremeter }}m²
                <i class="fa fa-bath" aria-hidden="true"></i>
                {{ item.bathroom }}
                <i class="fa fa-home" aria-hidden="true"></i
                >{{ item.LivingRoom }}
                <i class="fa fa-bed" aria-hidden="true"></i>
                5
                <i class="fa fa-tree" arial-hidden="ture"></i>
                {{ item.GardenSpace }} m²<br />
                <i class="fa-solid fa-gear"></i> {{item.Option}}
                <i class="fa fa-user" aria-hidden="true"></i>
                {{ item.Agent }}
              </b-card-text>

              <router-link
                class="btn btn-outline-warning btn-block"
                to="/Resdetails/1"
                >Details</router-link
              >
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Residences: [
        {
          Photo: require("../assets/Properties.png"),
          price: "120€",
          Squaremeter: "500",
          bathroom: "4",
          LivingRoom: "2",
          GardenSpace: "1500",
          Agent: "Rinor Biçku",
          City: "Prishtina",
          Location: "St bekim femiu",
          Option:"Rent",
        },
        {
          Photo: require("../assets/Properties.png"),
          price: "120€",
          Squaremeter: "500",
          bathroom: "4",
          LivingRoom: "2",
          GardenSpace: "1500",
          Agent: "Rinor Biçku",
          City: "Prishtina",
          Location: "St bekim femiu",
          Option:"Rent",
        },
        {
          Photo: require("../assets/Properties.png"),
          price: "120€",
          Squaremeter: "500",
          bathroom: "4",
          LivingRoom: "2",
          GardenSpace: "1500",
          Agent: "Rinor Biçku",
          City: "Prishtina",
          Location: "St bekim femiu",
          Option:"Rent",
        },
        {
          Photo: require("../assets/Properties.png"),
          price: "120€",
          Squaremeter: "500",
          bathroom: "4",
          LivingRoom: "2",
          GardenSpace: "1500",
          Agent: "Rinor Biçku",
          City: "Prishtina",
          Location: "St bekim femiu",
          Option:"Rent",
        },
        
      ],
    };
  },
};
</script>
