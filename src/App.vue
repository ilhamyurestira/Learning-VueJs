<template>
  <AppHeader v-bind:TextHeader="textHeader" />
  <input type="text" v-model="search" placeholder="Search..." />
  <h2>Name: {{ name }} </h2>
  <input type="text" v-model="newName"><br>
  <button v-on:click="changeName">Change Name</button><br>
  <a v-bind:href="url">Go To Google.com</a>

  <div v-if="products.length">
    <ul>
      <!-- loop data -->
      <li v-for="product in filterProducts" v-bind:key="product.id">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
  <!-- jika tidak ada data -->
  <div v-else>
    <p>No Data</p>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue"
export default {
  name: 'App',
  components: {
    AppHeader,
  },
  data() {
    return {
      url: "https://google.com",
      name: "Udin Arbain",
      newName: "",
      search: "",
      products: [],
      // textHeader : "Welcome Bambang"
    }
  },
  methods: {
    changeName() {
      this.name = this.newName
    },
  },
  created() {
    this.products = [
      { id: 1, title: "Product 1", price: 5000 },
      { id: 2, title: "Product 2", price: 4500 },
      { id: 3, title: "Product 3", price: 3700 },
      { id: 4, title: "Product 4", price: 1200 },
    ];
  },
  // Computed Properties
  computed: {
    filterProducts() {
      //      alert("DSDs")
      // filter product dari array
      return this.products.filter((product) => {
        // Return title = search
        return product.title.toUpperCase().match(this.search.toUpperCase());
      });
    },
    textHeader() {
      return `Welcome ${this.name}`;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
