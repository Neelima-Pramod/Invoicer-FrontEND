<template>
  <section class="section">
    <!-- <b-menu>
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
    </b-menu> -->

     <b-menu class="is-custom-mobile">
        <b-menu-list >
            <b-menu-item active expanded icon="note-multiple" class="makeBold" label="INVOICERS">
                <b-menu-item 
                icon="plus-box-outline" 
                class="menuSubItemStyle" 
                label="Make Invoices"
                tag="router-link" to="/dashboard/add-invoice">
               </b-menu-item>
                <b-menu-item icon="format-list-bulleted" class="menuSubItemStyle" label="List Invoices"></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="label" class="makeBold" label="PRODUCTS">
                <b-menu-item icon="account-box" label="List Products"></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" class="makeBold"  label="PAYERS">
            </b-menu-item>
        </b-menu-list>
   </b-menu>

  </section>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
.menu-list a.is-active {
    background-color: white;
    color: #fff;
}
.makeBold{
  font-weight: 1000;
}
.menuSubItemStyle{
   font-weight: 500;
}
.md-theme-default a:not(.md-button) {
    color: black;
}

</style>