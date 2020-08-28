<template>
  <section class="section">
    <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
      <div slot="trigger" class="card-header" role="button" aria-controls="contentIdForA11y3">
        <p class="card-header-title">Mail</p>
        <a class="card-header-icon">
          <b-switch></b-switch>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-half">
              <div class="columns mt4">
                <div class="column content">The payer will receive a mail shown in the image from -</div>
              </div>
              <div class="columns mt4">
                <div class="column content">
                  <div>Payer Email</div>
                  <div>
                    <b-input v-model="model.payerEmail"></b-input>
                  </div>
                </div>
              </div>
              <div class="columns mt4">
                <div class="column content">
                  <div>Mail Subject</div>
                  <div class="mt1">
                    <b-input v-model="subject"></b-input>
                  </div>
                </div>
              </div>

              <div class="columns mt5">
                <div class="column content">
                  <div>Mail Message</div>
                  <b-field>
                    <b-input type="textarea" v-model="mailMessage"></b-input>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="column has-background-white-ter">
              <div class="columns">
                <div class="column">
                  <div class="card">
                    <div class="card-content content">Subject: {{subject}}</div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="card">
                    <div class="card-content">
                      <div class="columns">
                        <div class="column">
                          <div>
                            <img width="25%" src="../assets/images/logo.png" alt="Invoicer" />
                          </div>
                          <div class="mt2 ml1 content">Hi {{model.payerName}}</div>
                          <div class="mt0-5 ml1 mt1">{{mailMessage}}</div>
                          <hr style="height: 2px;" class="mt2" />
                          <div class="columns">
                            <div class="column">
                              <div class="mt2 content">Rs {{model.total}}</div>
                              <div
                                class="mt4 content">
                                  Due Date- {{model.dueDate|moment}}</div>
                            </div>
                            <div class="column">
                              <div class="has-text-right mt2">
                                <b-button type="is-primary">Pay Invoice</b-button>
                              </div>
                              <div class="has-text-right mt3">Download</div>
                            </div>
                          </div>
                          <hr style="height: 2px;" class="mt2" />
                          <div class="columns">
                            <div class="column">
                              <div class="mt1 content" style="font-size:large">Invoice Information</div>
                              <div class="mt1">
                                Invoice Number:
                                <span class="content">{{model.invoiceNo}}</span>
                              </div>
                              <div class="mt1">Created at:</div>
                              <div class="mt1">Total no. of products:</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>

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
          <button class="is-primary button mt1 ml2">Continue</button>
        </div>
      </div>
    </section>
  </section>
</template>


<script>
import axios from "axios";
import moment from 'moment'

const baseURL = "http://localhost:8080";

export default {
  name: "Channel",
  data() {
    return {
      invoiceId: "",
      subject: "",
      mailMessage: "",
      model: {
        invoiceNo: "",
        payerName: "",
        payerEmail: "",
        total: 0,
        dueDate: moment()
      }
    };
  },
  mounted() {
    this.getInvoiceData();
  },
  filters: {
  moment: function (date) {
    return moment.unix(date).format("DD-MM-YYYY");
  }
},
  methods: {
    //    isDueDate(date) {
    //         return moment(date).format('YYYY-MM-DD')
    //     },
    getInvoiceData() {
      axios
        .get(baseURL + "/api/invoice/" + this.$route.query.invoiceId)
        .then(response => {
          console.log(response.data);
          this.model = response.data;
        });
    }
  }
};
</script>

<style>
.cardContents {
  margin-top: 4rem;
  font-weight: bold;
}
.content {
  font-weight: bold;
  color: #363636;
  font-size: medium;
}
</style>

  <!-- <div class="columns box has-background-white-ter">
                                <div class="column card">
                                    Subject
                                </div>  
                            </div>
                            <div class="columns box has-background-white-ter">
                                 <div class="column card">
                                    Invoicer
                                </div>                            
                            </div> -->