<template>
  <div>
    
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
        { Photo: require("../assets/Properties.png"),price: "120",Squaremeter: "400",City: "Prishtina",Location:"Stbekim femiu" },
        { Photo: require("../assets/Properties.png"),price: "340",Squaremeter: "600",City: "Prishtina",Location:"Stbekim femiu" },
        { Photo: require("../assets/Properties.png"),price: "200",Squaremeter: "800sss",City: "Prishtina",Location:"Stbekim femiu" },
      ],
    };
  },
};
</script>
