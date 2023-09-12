<template>
    <div :style="{ marginTop: '25px' }">
        <router-link :to="{ name: 'cakadesCreate' }" class="button is-success mt-5">Add New</router-link>
        <table class="table is-striped is-bordered mt-2 is-fullwidth">
            <thead>
                <tr>
                    <th>NIK Cakades</th>
                    <th>Nama Cakades</th>
                    <th>Alamat_cakades</th>
                    <th class="has-text-centered">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.nik_cakades }}</td>
                    <td>{{ item.nama_cakades }}</td>
                    <td>{{ item.alamat_cakades }}</td>
                    <td class="has-text-centered">
                        <router-link :to="{ name: 'cakadesEdit', params: { id: item.id } }"
                            class="button is-info is-small">Edit</router-link>
                        <a class="button is-danger is-small" @click="deleteCakades(item.id)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import axios
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";
export default {
    name: "cakadesList",
    data() {
        return {
            items: [],
            AuthStr: 'Bearer ' + localStorage.getItem('token'),
        };
    },

    created() {
        this.getCakades();
    },

    methods: {
        // Get All Products
        async getCakades() {
            try {
                const response = await axios.get("http://localhost:8000/api/v1/cakades",
                    { 'headers': { 'Authorization': this.AuthStr } });
                this.items = response.data;
                console.log("this.items", this.items)
            } catch (err) {
                console.log(err);
            }
        },

        // Delete Product
        async deleteCakades(id) {
            VueSimpleAlert.confirm("Yakin data Hapus?").then(async () => {
                try {
                    await axios.delete(`http://localhost:8000/api/v1/cakades/${id}/hapus`);
                    this.getProducts();
                } catch (err) {
                    console.log(err);
                }
            }).catch(() => console.log("Hapus Data dibatalkan"));
        },
    },
};
</script>

<style>
.mt-custom {
    margin-top: 100px;
}
</style>
