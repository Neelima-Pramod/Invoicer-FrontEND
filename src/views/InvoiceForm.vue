<template>
    <section class="section">
        <div class="columns box">
            <div class="column is-4">

                <b-field label="Payer Name">
                    <b-input></b-input>
                </b-field>

                <b-field label="Payer Email">
                    <b-input></b-input>
                </b-field>

            </div>

            <div class="column">
                <b-field label="Due Date">
                    <b-datepicker
                        :show-week-number="false"
                        placeholder="Click to select..."
                        icon="calendar-today"
                        trap-focus>
                    </b-datepicker>
                </b-field>
            </div>


            <div class="column">
                <div class=" has-text-centered">
            <b-field>
              <b-upload
                drag-drop
                expanded
              >
                <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon
                        icon="upload"
                        size="is-large"
                      />
                    </p>
                    <p>Choose logo for Invoice</p>
                  </div>
                </section>
              </b-upload>
            </b-field>
          </div>
        </div>

        </div>
    </section>
</template>

<script>
export default {
    name:"InvoiceForm"
}
</script>

<style >
/* .md-field {
    width: 50%;
} */
input{
width: 70% !important;
}

</style>