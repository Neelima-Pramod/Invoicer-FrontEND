<template>
  <div>
    <nav-bar></nav-bar>
    <router-view />
    <!-- <div id="app"> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";
import NavBar from "./components/NavBar"

Vue.use(VueRouter);

Vue.use(Buefy);

export default {
  name: "App",
  components:{NavBar}
};
</script>

<style lang="scss">

@import "src/assets/scss/app.scss";

.button strong {
    color: white;
}
</style>


