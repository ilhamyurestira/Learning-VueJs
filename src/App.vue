<template>
  <div v-show="showdiv">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">EXPRESS.JS + VUE.JS</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home Page</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/list" class="nav-link">List</router-link>
            </li>
            <li class="navlatihan">
              <router-link to="/tambah" class="nav-link">Tambah</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/edit" class="nav-link">Edit</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
//import Header from "./components/Header";

export default {
  name: 'App',
  data() {
    return {
      showdiv: false,
    }
  },

  created: function () {
    //this.getCakadesById();
    this.loadApp()
  },
  methods: {
    loadApp() {
      let token = localStorage.getItem('token')
      if (token === undefined || token === null || token.length === 0) {
        this.showdiv = false
        this.$router.push("/login");
      } else {
        this.showdiv = true
      }
    }
  },
}
</script>

<style>
/**/
@import "~bulma/css/bulma.css";
</style>
