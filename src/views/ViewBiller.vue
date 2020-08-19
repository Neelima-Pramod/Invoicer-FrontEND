<template>
  <section class="section">
    <div class="container box">
      <div class="columns">
        <div class="column">
    
          <b-table :data="results">
              <template slot-scope="props">
              <b-table-column field="name.firstName" label="First Name">{{ props.row.name.firstName }}</b-table-column>
              <b-table-column field="name.lastName" label="Last Name">{{ props.row.name.lastName }}</b-table-column>
              <b-table-column field="email" label="Email">{{ props.row.email }}</b-table-column>
              <b-table-column field="phoneNumber" label="Phone no">{{ props.row.phoneNumber }}</b-table-column>
              <b-table-column field="address.city" label="City">{{ props.row.address.city }}</b-table-column>
              <b-table-column field="address.country" label="Country">{{ props.row.address.country}}</b-table-column>
              
              <b-table-column label="Action">
                <fai icon="edit" size="is-large" class="mr1" @click.prevent="updateBiller(props.row.id)"/>
                <fai icon="trash" size="is-large" @click.prevent="deleteData(props.row.id)" />
              </b-table-column>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"

const baseURL = "http://localhost:8080";

export default {
  name: "ViewBiller",
  data() {
    return {
      results: []
      }
  },

  mounted() {
    this.getBiller();
  },
  methods: {
    getBiller() {
      axios
        .get(baseURL + "/biller",{
          headers:{
             Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(response => (this.results = response.data));
    },
    updateBiller(billerId){
      localStorage.id=billerId
     this.$router.push({ path: `/register?billerId=${billerId}` })
    },
    deleteBiller(billerId) {
      axios.delete(baseURL + "/delete/" + billerId).then(() => {
        this.getBiller();
      });
    }
  }
};
</script>