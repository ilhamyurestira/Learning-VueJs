<template>
    <div :style="{ marginTop: '0px', width: '50%', verticalAlign: 'middle', marginLeft: '25%' }">
        <label class="label" :style="{ textAlign: 'center' }">Login</label>
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="Username" v-model="username" />
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="text" placeholder="Password" v-model="password" />
            </div>
        </div>
        <div class="control">
            <button class="button is-success" @click="submit">Login</button>&nbsp;

        </div>
    </div>
</template>

<script>
//import Header from "./components/Header";
import axios from "axios";
import VueSimpleAlert from 'vue-simple-alert';
export default {
    name: 'loginApp',
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        async submit() {
            //VueSimpleAlert.confirm("Yakin data Tambah?").then(async() => {
            try {
                const response = await axios.post(
                    `http://localhost:8000/api/v1/auth/login`,
                    {
                        username: this.username,
                        password: this.password
                    }
                );
                this.username = "";
                this.password = "";
                if (response.data !== "auth failed") {
                    localStorage.setItem("token", response.data.token)
                    this.$root.showdiv = true;
                    this.$router.push("/");
                } else {
                    await VueSimpleAlert.alert(response.data);
                }

                //console.log("response",response)

            } catch (err) {
                console.log(err);
            }
            //}).catch(() => console.log("Tambah Data dibatalkan"));

        },

    },
    mounted() {
        alert("Lakukan Login terlebih dahulu")
        let cekToken = localStorage.getItem("token");

        if (cekToken) {
            this.$router.push("/");
        }
    }

}
</script>

<style>
.mt-custom {
    margin-top: 110px;
}

/**/
@import "~bulma/css/bulma.css";
</style>
