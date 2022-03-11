<template>
  <div class="container">
    <div class="top" style="margin:auto;">
      <label><h3>Office For Rent</h3></label>
    </div>
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
                <tr v-for="item in Office" class="ca" v-bind:key="item.name">
                    <th scope="row"><img :src="item.Photo" width="100" height="100" /></th>
                    <td> {{item.price}} € / m²</td>
                    <td> {{item.Squaremeter}}m²</td>

                    <td>{{item.city}}</td>
                    <td>{{item.location}}</td>
                    
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
      Office: [
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m²',Squaremeter:"120m²",Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m²',Squaremeter:"120m²",Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m²',Squaremeter:"120m²",Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m²',Squaremeter:"120m²",Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m²',Squaremeter:"120m²",Agent:"Albin Sylemani"},
        { Photo: require('../assets/office.png'), city:"Prishtina",location:"Magjistralja Prishtine-ferizaj",price: '120 $/m²',Squaremeter:"120m²",Agent:"Albin Sylemani"},
      ]
    };
  },
};
</script>
