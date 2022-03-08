<template>
  <div class="container">
    <div class="top"></div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Name</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="File"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Surname</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            placeholder="Price"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputAddress">Age</label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputState">Phone Number</label>
          <input class="form-control" type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
        </div>

        <div class="form-group col-md-6">
          <label for="inputCity">Email</label>
          <input type="Email" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputState">Photo</label>
          <input type="file" class="form-control" />
        </div>
        
      </div>
      <div class="bottom" >
        <button type="submit" class="btn btn-primary float-right">Save</button>
        <router-link to="/Agents" class="btn btn-warning float-right">Back</router-link>
      </div>
    </form>
  </div>
</template>