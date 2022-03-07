<template>

  <div id="app">
    
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        Dardania Real Estate
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/" class="nav-link">
               Home
            </router-link>
          </b-nav-item>
          <b-nav-item >
            <router-link to="/Residence" class="nav-link">
              Residence
            </router-link>
          </b-nav-item>
          <b-nav-item >
            <router-link to="/Office" class="nav-link">
              Office
            </router-link>
          </b-nav-item>
          <b-nav-item >
            <router-link to="/Properties" class="nav-link">
              Properties
            </router-link>
          </b-nav-item>
          <b-nav-item >
            <router-link to="/Agents" class="nav-link">
              Agents
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
