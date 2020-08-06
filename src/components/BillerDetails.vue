<template>
     <!-- <div><span>Biller List</span><div> -->
         <div><b-table :columns="columns"></b-table>
    </div>
     
</template>

<script>
import axios from 'axios'
const baseURL="http://localhost:8080"

export default {
    name:'BillerDetails',
    data(){
        return{
            results:[],
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
    
    }
  }

}
</script>