<template>
  <section class="section">
    <b-menu>
      <b-menu-list>
        <b-menu-item 
        icon="information-outline" 
        label="INVOICES" expanded>

          <template 
          slot="label" 
          slot-scope="props">
            INVOICERS
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
          </template>
          <b-menu-item 
          label="Make Invoices" 
          tag="router-link" to="/dashboard/add-invoice"></b-menu-item>
          <b-menu-item label="List Invoices"></b-menu-item>
        </b-menu-item>

        <b-menu-item icon="information-outline" expanded>
          <template slot="label" slot-scope="props">
            PRODUCTS
            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
          </template>
          <b-menu-item label="Users"></b-menu-item>
        </b-menu-item>

        <b-menu-item icon="information-outline" label="PAYERS"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </section>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>