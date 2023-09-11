<template>
    <div :style="{ marginTop: '80px' }">
        <div class="field">
            <label class="label">NIK Cakade</label>
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
            <button class="button is-success" @click="addCakades">Tambah</button>&nbsp;
            <button class="button is-warning" @click="cancelProcess">Batal</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";

export default {
    name: "cakadesCreate",
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
        async cancelProcess() {
            this.$router.push("/CakadesList");
        },
        async addCakades() {
            VueSimpleAlert.confirm("Yakin data Tambah?").then(async () => {
                try {
                    const response = await axios.post(`http://localhost:8000/api/v1/cakades/tambah`, {
                        nik_cakades: this.nik_cakades,
                        nama_cakades: this.nama_cakades,
                        alamat_cakades: this.alamat_cakades,
                        id_desa: this.id_desa,
                    });
                    this.nik_cakades = "";
                    this.nama_cakades = "";
                    this.alamat_cakades = "";
                    this.id_desa = "";
                    await VueSimpleAlert.alert(response.data);
                    this.$router.push("/list");
                } catch (err) {
                    console.log(err);
                }
            }).catch(() => console.log("Tambah Data dibatalkan"));
        },
    },
};
</script>

<style></style>
