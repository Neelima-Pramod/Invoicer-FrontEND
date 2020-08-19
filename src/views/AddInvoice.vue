<template>
<section class="section">
  <div class="columns mb3">
    <div class="column">
        <h1 class="title has-text-primary has-text-centered">
          Choose your template!
        </h1>
    </div>
  </div>
  <div class="columns has-text-centered">
    <div class="column">
       <img 
       width="40%"  
       src="../assets/images/invoice_with_free_text .png" 
       alt="Invoicer template1" 
       class="has-light-dark-border zoom"
        @click="openInvoiceForm(1)" />
    </div>
    <div class="column">
      <img
      width="40%"
      src="../assets/images/invoice_without_free_text.png.png"
      alt="Invoicer template2"
      class="has-light-dark-border zoom"
      @click="openInvoiceForm(2)"
      />
    </div>
  </div>
</section>
</template>

<script>
export default {
    name:"AddInvoice",
     methods:{
      openInvoiceForm(invoiceTemplateNumber){
        this.$router.push("/dashboard/invoice-form?template="+invoiceTemplateNumber);
      }
    }
}
</script>

<style scoped>
.zoom {
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.imgBox:hover {
  -moz-box-shadow: 0 0 10px #ccc;
  -webkit-box-shadow: 0 0 10px #ccc;
  box-shadow: 0 0 10px #ccc;
  cursor: pointer;
}

</style>