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
                <fai icon="edit" size="is-large" class="mr1" />
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
import axios from "axios";
const baseURL = "http://localhost:8080";

export default {
  name: "ViewBiller",
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
  },

  mounted() {
    this.getBiller();
  },
  methods: {
    getBiller() {
      axios
        .get(baseURL + "/getAll")
        .then(response => (this.results = response.data));
    },
    deleteData(id) {
      axios.delete(baseURL + "/delete/" + id).then(() => {
        this.getBiller();
      });
    }
  }
};
</script>