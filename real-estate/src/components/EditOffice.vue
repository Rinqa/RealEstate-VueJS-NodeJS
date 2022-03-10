<template>
  <div class="container">
    <div class="top"></div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Photo</label>
          <input type="file" class="form-control" placeholder="File" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Price</label>
          <input
            type="text"
            class="form-control"
            placeholder="Price"
            value="120 $/m2"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value="Magjistralja Prishtine-ferizaj"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputState">City</label>
          <select id="inputState" class="form-control">
            <option selected>Prishtina</option>
            <option>Gjilan</option>
            <option>Peja</option>
            <option>Gjakova</option>
          </select>
        </div>

        <div class="form-group col-md-2">
          <label for="inputCity">Square meter</label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            value="120m²"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="inputState">Bathroom</label>
          <input type="text" class="form-control" value="True" />
        </div>

        <div class="form-group col-md-2">
          <label for="inputState">Options</label>
          <select id="inputState" class="form-control">
            <option selected>Rent</option>
            <option>Sell</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Agent</label>
          <select id="inputState" class="form-control">
            <option selected>Rinor Biçku</option>
            <option>Albin Sylejmani</option>
            <option>Dion Rama</option>
            <option>Albin Ymeri</option>
          </select>
        </div>
        <div class="form-group col-md-8">
          <label>Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value=""
          >
Servcors Serviced Offices come fully furnished and include access to our facilities and support services, so you can cut costs and get to work the day you move in.</textarea
          >
        </div>
      </div>
      <div class="bottom">
        <button type="submit" class="btn btn-primary float-right">Save</button>
        <router-link to="/Residence" class="btn btn-warning float-right"
          >Back</router-link
        >
      </div>
    </form>
  </div>
</template>