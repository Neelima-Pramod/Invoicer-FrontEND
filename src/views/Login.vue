<template>
  <section class="section">
   <div class="columns mt3">
     <div class="column is-4 is-offset-4 box">
       <h1 class="title has-text-centered">Login</h1>
          <md-field md-clearable>
            <label>Enter Username</label>
            <md-input v-model="model.username" type="email"></md-input>
          </md-field>
          <md-field>
            <label>Enter Password</label>
            <md-input v-model="model.password" type="password"></md-input>
          </md-field>
          <div class="buttons">
            <b-button type="is-primary" v-on:click="login">Login</b-button>
          </div>
     </div>
   </div>
  </section>
</template>

<script>

import axios from "axios";

const baseURL = "http://localhost:8080";

export default {
  name: "Login",

  data() {
    return {
      results: "",
      model: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      axios
        .post(baseURL + "/api/biller/login",this.model)
        .then(response => {
          if (response.data) {  
            localStorage.setItem("token",response.data.token)                                                                            
            this.toast("Login Success", "is-success");
            this.$router.push("/dashboard");
          } else {
            this.toast("Login failed!!Try again", "is-failure");
          }
        })
        .catch(() => {});
    },
    toast(message, type) {
      this.$buefy.toast.open({
        message: message,
        type: type
      });
    }
  }
};
</script>

<style scoped>

.field.md-theme-default label {
    color:yellow 
}
</style>