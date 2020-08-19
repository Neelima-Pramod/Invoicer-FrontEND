<template>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item  @click="isLogin()">
          <img width="70%"  src="../assets/images/logo.png" alt="Invoicer"  />
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div" v-show="$route.name!=='DisplayJson'" >
          <div class="buttons">
            <a class="button is-light" @click="logout">Log out</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

</template>
<script>
export default {
    name:"Navbar",
    methods:{
      logout(){
          localStorage.removeItem("token")
          this.$router.push({path: '/api/login'})
      },
      isLogin(){
        if(localStorage.getItem("token")){
          this.$router.push({path: '/api/register'})
        }
      }
    }

}
</script>