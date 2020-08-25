<template>   
    <section class="section">
        <div class="columns">
            <div class="column content has-text-centered">
                <b-button >Via Email</b-button>
            </div>

            <div class="column content has-text-centered">
                  <b-button>Via SMS</b-button>
            </div>
            <div>
                  <input type = "text" v-model = "fullname" />
                    <h1>{{firstName}}</h1>
                    <h1>{{lastName}}</h1>
            </div>

            <div>
                  <input type = "text" v-model = "fullname" />
                    <h1>{{firstName}}</h1>
                    <h1>{{lastName}}</h1>
            </div>



        </div>
    </section>
</template>

<script>
export default {
    name:"Channel",
     data() {
         return{
               firstName : "Terry",
               lastName : "Ben"
         }
              
            },
     computed :{
                    fullname : {
                  get : function() {
                     return this.firstName+" "+this.lastName;
                  },
                  set : function(name) {
                     var fname = name.split(" ");
                     this.firstName = fname[0];
                     this.lastName = fname[1]
                  }
               }
            }
}
</script>