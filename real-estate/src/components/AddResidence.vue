<template>
  <div class="container">
    <div class="top"></div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Photo</label>
          <input
            type="file"
            class="form-control"
            id="inputEmail4"
            placeholder="File"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Price</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            placeholder="Price"
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
          <input type="number" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-2">
          <label for="inputState">Bathroom</label>
          <input type="number" class="form-control" />
        </div>
        
        <div class="form-group col-md-2">
          <label for="inputZip">Living Room</label>
          <input type="Number" class="form-control" id="inputZip" />
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Garden Space</label>
          <input type="Number" class="form-control" id="inputZip" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Agent</label>
          <select id="inputState" class="form-control">
            <option selected></option>
            <option>Rinor Biçku</option>
            <option>Albin Sylejmani</option>
            <option>Dion Rama</option>
            <option>Albin Ymeri</option>
          </select>
        </div>
      </div>
      <div class="bottom" >
        <button type="submit" class="btn btn-primary float-right">Save</button>
        <router-link to="/Residence" class="btn btn-warning float-right">Back</router-link>
      </div>
    </form>
  </div>
</template>