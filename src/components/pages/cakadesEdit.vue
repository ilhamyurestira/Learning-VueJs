<template>
    <div :style="{marginTop:'80px'}">
        <h2>Edit Cakades</h2>
        <div class="field">
            <label class="label">NIK Cakades</label>
            <div class="control">
                <input class="input" type="text" placeholder="NIK Cakades" v-model="nik_cakades" />
            </div>
        </div>

        <div class="field">
            <label class="label">Nama Cakades</label>
            <div class="control">
                <input class="input" type="text" placeholder="Nama Cakades" v-model="nama_cakades" />
            </div>
        </div>

        <div class="field">
            <label class="label">Alamat Cakades</label>
            <div class="control">
                <textarea class="textarea" placeholder="Alamat Cakades" v-model="alamat_cakades" />
            </div>
        </div>

        <div class="field">
            <label class="label">Nama Desa</label>
            <div class="control">
                <select class="form-control" v-model="id_desa">
                    <option v-for="desa in desas" :key="desa.id" :value="desa.id">{{ desa.nama_desa }}</option>
                </select>
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="updateCakades">Update</button>
            <button class="button is-warning" @click="cancelEdit">Batal</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";

export default {
    name: "cakadesEdit",
    data() {
        return {
            nama_cakades: "",
            nik_cakades: "",
            alamat_cakades: "",
            id_cakades: "",
            id_desa: "",
            desas: [],
        };
    },
    created: function () {
        this.getDesa();
        // Mengambil ID Cakades dari URL atau Anda dapat melewatkan properti ini sebagai prop
        this.id_cakades = this.$route.params.id;
        this.getCakadesData();
    },
    methods: {
        async getDesa() {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/desa`);
                this.desas = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async getCakadesData() {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/cakades/${this.id_cakades}`);
                const data = response.data;
                this.nik_cakades = data.nik_cakades;
                this.nama_cakades = data.nama_cakades;
                this.alamat_cakades = data.alamat_cakades;
                this.id_desa = data.id_desa;
            } catch (err) {
                console.log(err);
            }
        },
        async updateCakades() {
            VueSimpleAlert.confirm("Yakin data akan diperbarui?").then(async () => {
                try {
                    const response = await axios.put(`http://localhost:8000/api/v1/cakades/${this.id_cakades}/ubah`, {
                        nik_cakades: this.nik_cakades,
                        nama_cakades: this.nama_cakades,
                        alamat_cakades: this.alamat_cakades,
                        id_desa: this.id_desa,
                    });
                    await VueSimpleAlert.alert(response.data);
                    this.$router.push("/list");
                } catch (err) {
                    console.log(err);
                }
            }).catch(() => console.log("Perbarui Data dibatalkan"));
        },
        cancelEdit() {
            this.$router.push("/list");
        },
    },
};
</script>

<style></style>
