<template>
   
 <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex flex-column align-items-start">
        <h2>First Name</h2>
        <input type="text" v-model="model.name.firstName" />
      </div>

      <div>
        <h2>Last Name</h2>
        <input type="text" v-model="model.name.lastName" />
      </div>

      <div>
        <h2>Phone</h2>
        <input type="text" v-model="model.phoneNumber" />
      </div>

      <div>
        <input type="submit" value="Submit" v-on:click="submitBillerDetails" />
      </div>
  </div>
  
</template>

<script>
// import billerSchema from '../BillerSchema.js'
import axios from 'axios'
const baseURL="http://localhost:8080"
  export default {
    name:'Register',
    data(){
    return {  
      model:{
        name:{
          firstName: '',
          lastName: ''
        },
        phoneNumber:''
        } 
      }
    },
    methods:{
      submitBillerDetails(){
      axios.post(baseURL+"/saveBiller",this.model)
      console.log(this.model)
      }
    }
  }
</script>




