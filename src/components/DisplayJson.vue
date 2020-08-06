<template>
  <section class="section">
    <div class="container box">
      <div class="columns">
        <div class="column">
          <div id="DisplayJson">
            <router-link to="/Register" tag="button">Register</router-link>
            <router-link to="/ViewBiller" tag="button">View</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default {
  name: "DisplayJson",
  data() {
    return {
      results: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40"
        },
        {
          field: "name.firstName",
          label: "First Name"
        },
        {
          field: "name.lastName",
          label: "Last Name"
        },
        {
          field: "email",
          label: "Email"
        },
        {
          field: "phoneNumber",
          label: "Phone Number"
        },
        {
          field: "address.city",
          label: "City"
        },
        {
          field: "address.country",
          label: "Country"
        }
      ]
    };
  }
};
</script>
