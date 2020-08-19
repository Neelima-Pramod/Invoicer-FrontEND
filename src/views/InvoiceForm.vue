<template>
  <section class="section">
    <!-- Payer Details -->
    <section class="box">
      <div class="columns">

        <div class="column is-4">
          <b-field
          label="Payer Name:">
            <b-input></b-input>
          </b-field>

          <b-field
          label="Payer Email:">
            <b-input type="email"></b-input>
          </b-field>
        </div>

        <div class="column">
          <b-field
          label="Due Date:">
           <b-datepicker
              :show-week-number="false"
              icon="calendar-today"
              trap-focus>
          </b-datepicker>
          </b-field>

          <b-field
          label="Invoice Number:">
            <b-input></b-input>
          </b-field>   
        </div>

        <div class="column">
          <b-upload v-model="dropFiles" multiple drag-drop expanded>
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-large"></b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
              </div>
            </section>
          </b-upload>
        </div>

      </div>
    </section>

    <!-- Text  -->

    <section v-if="template === '1'" class="box">

    </section>

    <!-- Table -->
    <section class="box">
      <div class="columns ">
        <div class="column">
           <b-table
            :data="invoice.products"
            :bordered="false"
            :striped="false"
            :narrowed="false"
            :hoverable="false"
            :loading="false"
            :focusable="false"
            :mobile-cards="true">
            <template slot-scope="props">

            <b-table-column field="s_no" label="Serial no" width="90" numeric>
                {{ props.row.s_no}}
            </b-table-column>

            <b-table-column field="product_name" label="Product Name">
               <b-input
                  v-model="props.row.product_name"
                  placeholder=" Product Name"
                />
            </b-table-column>

            <b-table-column field="product_desc" label="Product Description">
               <b-input
                  v-model="props.row.product_desc"
                  placeholder=" Product Description"
                />
            </b-table-column>

             <b-table-column field="quantity" numeric label="Quantity">
                 <b-input
                  v-model="props.row.quantity"
                  placeholder="Quantity"
                   @input="calculateTotal"
                />
            </b-table-column>

            <b-table-column field="price" numeric  label="Price">
                <b-input
                  v-model="props.row.price"
                  placeholder="Quantity"
                  @input="calculateTotal"
                />
            </b-table-column>

            <b-table-column field="total" numeric :editable="false" label="Total">
                {{ props.row.quantity * props.row.price}}
            </b-table-column>

            <b-table-column  label="Action">
                <fai icon="trash" size="is-large" />
            </b-table-column>
          </template>
        </b-table>
        </div>
      </div>

      <div class="columns">
         <div class="column has-text-right">
          <button class="is-primary button">
            <fai icon="plus" size="md"/>
            <span class="ml1">Product</span>
          </button>
        </div>
      </div>

    </section>

    <!-- Text -->
    <section class="box" v-if="template === '1'">

    </section>

    <!-- Footer -->
    <section>
       <div class="columns">
         <div class="column is-8">
           <b-field
            label="Footer"
            class="box">
            <b-input maxlength="200" type="textarea"></b-input>
          </b-field>
         </div>

         <div class="column">
           <div class="box">
             <div class="columns"  style="font-size: 1.2rem;">
               <div class="column">Discount:</div>
                <div class="column">
                <b-select placeholder="Discount" expanded>
                  <option>10%</option>
                  <option>20%</option>
                </b-select>
              </div>
             </div>
             <hr style="height: 2px;" class="mt3 has-background-primary">
             <div class="columns" style="font-size: 1.2rem;">
               <div class="column">
                 Total:
               </div>
               <div class="column has-text-right">Rs {{invoice.total}}</div>
             </div>
           </div>
         </div>
       </div>

    </section>
  </section>
</template>

<script>
export default {
  name:"InvoiceForm",
  data(){
    return{
      template:'',
      dropFiles: [],
      invoice:{
        products:[],
        total:''
      }
    }
  },
  mounted(){
    this.checkTemplateNo()
    this.addProduct()
  },
  methods:{
    checkTemplateNo(){
      this.$data.template = this.$route.query.template
    },
    addProduct(){
      let products={
        s_no:this.$data.invoice.products.length+1,
        product_name:'',
        product_desc:'',
        price:'',
        quantity:'',
        total:''
      }
      this.$data.invoice.products.push(products)
    },
    calculateTotal(){
      let tempTotal=0;
      this.$data.invoice.total=tempTotal;
    //  let tempTotal=0;
    //  this.$data.invoice.products.array.forEach(element => {
    //    tempTotal=element.total + tempTotal
    //  });
    //  this.$data.invoice.total=tempTotal;
    }
  }
}
</script>