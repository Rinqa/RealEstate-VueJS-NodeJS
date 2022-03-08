<template>
  <div class="container">
    <!-- <div class="top" style="margin:auto;">
      <input type="text"  placeholder="test" class="float-left">
    </div> -->
    <table class="table bg-light" id="myTable">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Price</th>  
                <th scope="col">Square Meter</th>
                <th scope="col">City</th>
                <th scope="col">Location</th>
                <th scope="col">Option</th>
            </tr>
        </thead>
        <tbody>
                <tr v-for="item in Residences" class="ca" v-bind:key="item.name">
                    <th scope="row"><img :src="item.Photo" width="100" height="100" /></th>
                    <td> {{item.price}} € / m²</td>
                    <td> {{item.Squaremeter}}m²</td>

                    <td>{{item.City}}</td>
                    <td>{{item.Location}}</td>
                    
                    <td><a class="btn btn-warning">Edit</a> <a class="btn btn-danger">Delete</a></td>
                </tr>
        </tbody>
    </table>
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
        },
        
      ],
    };
  },
};
</script>
