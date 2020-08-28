<template>
  <section class="section">
    <!-- Payer Details -->
    <section class="box">
      <div class="columns">
        <div class="column is-4">
          <b-field label="Invoice Number:">
            <b-input v-model="invoice.invoiceNo" readonly="true"></b-input>
          </b-field>
          <b-field label="Payer Name:">
            <b-input v-model="invoice.payerName"></b-input>
          </b-field>
        </div>

        <div class="column">
          <b-field label="Due Date:">
            <b-datepicker :show-week-number="false" v-model="invoice.dueDate" icon="calendar-today" trap-focus></b-datepicker>
          </b-field>

          <b-field label="Payer Email:">
            <b-input type="email" v-model="invoice.payerEmail"></b-input>
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
      <b-field label="Free Text:">
        <b-input type="textarea" v-model="invoice.freeTextOne"></b-input>
      </b-field>
    </section>

    <!-- Table -->
    <section class="box">
      <div class="columns">
        <div class="column">
          <b-table
            :data="invoice.products"
            :bordered="false"
            :striped="false"
            :narrowed="false"
            :hoverable="false"
            :loading="false"
            :focusable="false"
            :mobile-cards="true"
          >
            <template slot-scope="props">
              <b-table-column field="s_no" label="Serial no" width="90">{{ props.row.s_no}}</b-table-column>

              <b-table-column field="product_name" label="Product Name">
                <b-input v-model="props.row.product_name" placeholder=" Product Name" />
              </b-table-column>

              <b-table-column field="product_desc" label="Product Description">
                <b-input v-model="props.row.product_desc" placeholder=" Product Description" />
              </b-table-column>

              <b-table-column field="quantity" label="Quantity">
                <b-input
                  type="number"
                  v-model="props.row.quantity"
                  placeholder="Quantity"
                  @input="calculateTotal"
                />
              </b-table-column>

              <b-table-column field="price" label="Price">
                <b-input
                  type="number"
                  v-model="props.row.price"
                  placeholder="Price"
                  @input="calculateTotal"
                />
              </b-table-column>

              <b-table-column field="total" label="Total">
                <b-input
                  type="number"
                  placeholder="Total"
                  readonly="true"
                  v-model="props.row.productTotal"
                ></b-input>
              </b-table-column>

              <b-table-column label="Action">
                <fai class="ml1" icon="trash" size="is-large" />
              </b-table-column>
            </template>
          </b-table>
        </div>
      </div>

      <div class="columns">
        <div class="column has-text-right">
          <button class="is-primary button" @click="addProduct">
            <fai icon="plus" size="md" />
            <span class="ml1">Product</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Text -->
    <section class="box" v-if="template === '1'">
      <b-field label="Free Text:">
        <b-input type="textarea" v-model="invoice.freeTextTwo"></b-input>
      </b-field>
    </section>

    <!-- Footer -->
    <section>
      <div class="columns">
        <div class="column is-8">
          <b-field label="Footer" class="box">
            <b-input maxlength="200" type="textarea" v-model="invoice.footer"></b-input>
          </b-field>
        </div>

        <div class="column">
          <div class="box">
            <div class="columns" style="font-size: 1.2rem;">
              <div class="column">Discount:</div>
              <div class="column">
                <b-select v-model="discountSelected" placeholder="Discount" expanded>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </b-select>
              </div>
            </div>
            <hr style="height: 2px;" class="mt3 has-background-primary" />
            <div class="columns" style="font-size: 1.2rem;">
              <div class="column">Total:</div>
              <div class="column has-text-right">Rs {{invoice.total}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      style="
             position: fixed;
             bottom: 0;
             left: 0;
             width: 100%;
     "
    >
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column has-background-primary pb2 pr2 has-text-right">
          <button class="is-primary button mt1 ml2" @click="continueInvoice">Continue</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:8080";

export default {
  name: "InvoiceForm",
  data() {
    return {
      template: "",
      iCount: 0,
      sum: 0,
      dropFiles: [],
      invoice: {
        invoiceNo: 0,
        payerName: "",
        payerEmail: "",
        freeTextOne: "",
        freeTextTwo: "",
        products: [],
        total: 0,
        footer: "",
        dueDate:""
      }
    };
  },
  computed: {
    discountSelected: {
      get: function() {
        return this.$data.invoice.total;
      },
      set: function(discount) {
        if (this.iCount >= 1) {
          this.$data.invoice.total = this.sum;
        } else {
          this.sum = this.$data.invoice.total;
          this.iCount += 1;
        }
        this.$data.invoice.total =
          this.$data.invoice.total -
          (this.$data.invoice.total * discount) / 100;
      }
    }
  },
  mounted() {
    this.checkTemplateNo();
    this.addProduct();
    this.generateInvoiceNo();
  },
  methods: {
    checkTemplateNo() {
      this.$data.template = this.$route.query.template;
    },
    generateInvoiceNo() {
      axios
        .get(baseURL + "/api/getInvoiceNo", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`
          }
        })
        .then(
          response => (this.$data.invoice.invoiceNo = "INV00" + response.data)
        );
    },
    addProduct() {
      let products = {
        s_no: this.$data.invoice.products.length + 1,
        product_name: "",
        product_desc: "",
        quantity: 0,
        price: 0,
        productTotal: 0
      };
      this.$data.invoice.products.push(products);
    },
    calculateTotal() {
      let tempTotal = 0;
      this.$data.invoice.products.forEach(element => {
        element.productTotal = element.quantity * element.price;
        tempTotal = element.quantity * element.price + tempTotal;
      });
      this.$data.invoice.total = tempTotal;
    },
    saveInvoice() {
      axios.post(
        baseURL + "/api/invoices",this.invoice,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`
          }
        }
      ).then((response)=>this.$router.push("/channel?invoiceId="+response.data.id))
    },
    continueInvoice() {
      this.saveInvoice();
    }
  }
};
</script>
<!--this.$router.push({path:`/channel?invoiceId=${response.data.id}`}))-->

<style scoped>
.footer1 {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 50;
  width: 70%;
  background-color: #2376ad;
  color: white;
  text-align: center;
}
</style>

 <!-- <section>
      <div class="footer1 box">
        <div class="has-text-right">
          <b-button @click="continueInvoice">Continue</b-button>
        </div>
      </div>
    </section>-->