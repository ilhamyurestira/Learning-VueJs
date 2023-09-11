<template>
    <h2>{{ TextHeader }}</h2>
    <button v-on:click="changeText">Change Title</button><br /><br />
</template>

<script>
export default {
    name: "AppHeader",
    props: ["TextHeader"],
    // Data Property
    data() {
        return {
            text: "Welcome Udin",
        };
    },
    // Methods Property
    methods: {
        changeText() {
            this.$emit("changeTitle", this.text);
        }
    },
    // Emits Property
    emits: ["changeTitle"],
};
</script>

<style></style>
