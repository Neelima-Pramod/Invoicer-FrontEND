<template>

<div id ="DisplayJson">
   <b-field grouped group-multiline>
            <div class="control">
                <b-switch v-model="isBordered">Bordered</b-switch>
            </div>
              
    </b-field>

    <b-button type="is-info" @click="getBiller">View biller Details</b-button>
    <!-- <b-button type="is-success" @click="registerBiller">Register</b-button> -->
    <div>
        <span>Biller List</span>
    </div>
    
    <b-table thead-class="hidden_header" :bordered="isBordered" :data="results" :columns="columns"></b-table>
    <!-- <ul>
      <li v-for="biller in results"
      :key="biller.id">
        {{ biller.email }}
      </li>
    </ul> -->

    <div>
        <span>Biller FORM</span>
    </div>
    <form @submit.prevent="handleSubmit">
    <label>
      Email:
      <input type="email" v-model="registerData.email"/>
    </label>
    <button type="submit">Submit</button>
  </form>


</div>
</template>

<script>
import axios from 'axios'
const baseURL="http://localhost:8080"

export default {
  name: 'DisplayJson',
  data(){
      return {
      results:[],
      registerDetails:[],
      registerData:{
        email=''
      },
      isBordered: false,
      columns: [
              {
                  field:'id',
                  label: 'ID',
                  width: '40',
              },
              {
                  field: 'name.firstName',
                  label: 'First Name',
              },
              {
                  field: 'name.lastName',
                  label: 'Last Name',
              },
              {
                  field: 'email',
                  label: 'Email',
              },
              {
                  field: 'phoneNumber',
                  label: 'Phone Number',
              },
              {
                  field: 'address.city',
                  label: 'City',
              },
              {
                  field: 'address.country',
                  label: 'Country',
              }
            ]
    };
  },
  methods:{
    getBiller(){
      axios.get(baseURL+"/getAll").then(response => (this.results = response.data));
    
    },
    handleSubmit(){
      
      axios.post(baseURL+"/saveBiller",this.registerData).
      then(response => (this.registerDetails = response.data));
      console.log(this.registerDetails)
    }
  }
}


      // axios.get(baseURL+"/getAll")
      // .then(response=> response.json())
      // .then(data=>(this.results=data));
      // // .catch(error=>{
      //   console.log(error)
      // })

// .then(response =>{
//         this.results = response.data
//         console.log(this.results)
//       })
</script>

 <style>
.hidden_header {
  display: none;
}
</style>