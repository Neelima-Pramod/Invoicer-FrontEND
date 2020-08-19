<template>
  <section class="section">
    <div class="container box">
      <div class="columns">
        <div class="column"> 
           <h1 class="title has-text-centered">Register</h1>

          <form novalidate @submit.prevent="validateUser">

            <md-field :class="getValidationClass('$name.firstName')">
            <label for="name.firstName">First Name</label>
            <md-input name="name.firstName" id="name.firstName"  v-model="form.name.firstName" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.name.firstName.required">First Name required</span>
            </md-field>

            <md-field :class="getValidationClass('lastName')">
            <label for="lastName">Last Name</label>
            <md-input name="lastName" id="lastName"  v-model="form.name.lastName" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.name.lastName.required">Last Name required</span>
            </md-field>

             <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email"  v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">Email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

            <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password"  v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">Password is required</span>
          </md-field>

            <md-field :class="getValidationClass('confirmPassword')">
            <label for="confirmPassword">Confirm Password</label>
            <md-input type="password" name="confirmPassword" id="confirmPassword"  v-model="form.confirmPassword" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.confirmPassword.required">Confirm Password is required</span>
            <span class="md-error" v-else-if="!$v.form.confirmPassword.sameAsPassword">Passwords must be identical</span>
          </md-field>

          <md-field :class="getValidationClass('aptNo')">
            <label for="aptNo">Apt No:</label>
            <md-input name="aptNo" id="aptNo"  v-model="form.address.aptNo" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.address.aptNo.required">Apt No required</span>
          </md-field>

          <md-field :class="getValidationClass('street')">
            <label for="street">Street:</label>
            <md-input name="street" id="street"  v-model="form.address.street" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.address.street.required">Street required</span>
          </md-field>

           <md-field :class="getValidationClass('city')">
            <label for="city">City:</label>
            <md-input name="city" id="city"  v-model="form.address.city" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.address.city.required">City required</span>
          </md-field>

          <md-field :class="getValidationClass('country')">
            <label for="country">Country:</label>
            <md-input name="country" id="country"  v-model="form.address.country" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.address.country.required">Country required</span>
          </md-field>

          <md-field :class="getValidationClass('pCode')">
            <label for="pCode">Pincode:</label>
            <md-input name="pCode" id="pCode"  v-model="form.address.pCode" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.address.pCode.required">PinCode required</span>
          </md-field>

          <md-field :class="getValidationClass('phoneNumber')">
            <label for="phoneNumber">Phone Number:</label>
            <md-input name="phoneNumber" id="phoneNumber"  v-model="form.phoneNumber" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.phoneNumber.required">Phone Number required</span>
          </md-field>

          <md-button type="submit" class="md-primary" :disabled="sending">Register</md-button>
          </form>
        
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { validationMixin } from 'vuelidate'
import { required,email,sameAs} from 'vuelidate/lib/validators'
const baseURL = "http://localhost:8080";
export default {
  name: 'app',

  mixins: [validationMixin],

  data() {
    return{
       form: {
        name:{
          firstName:'',
          lastName:''
        },
        email: '',
        password:'',
        confirmPassword:'',
        address:{
          aptNo:'',
          street:'',
          city:'',
          country:'',
          pCode:''
        },
        phoneNumber:''
      },
      userSaved: false,
      sending: false,
      lastUser: null
    };
     
    },
    validations: {
      form: {
        name:{
          firstName:{required},
          lastName:required
        },
        email: {
          required,
          email
        },
        password: {
          required
        },
        confirmPassword:{
          required,
          sameAsPassword: sameAs('password')
        },
        address:{
          aptNo:{required},
          street:{required},
          city:{required},
          country:{required},
          pCode:{required}
        },
        phoneNumber:{
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        console.log(fieldName)
        const field = this.$v.form[fieldName]
        console.log(field)

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.email = null
      },
      saveUser () {
        this.sending = true
        axios.post(baseURL + "/api/biller", this.form)
        .then(response => {
          console.log(response)
        if (response.data) {
          this.toast("Register Success", "is-success");
          this.$router.push("/dashboard");
        } else {
          this.toast("Register failed!!Try again", "is-failure");
        }
      })
      },
       toast(message, type) {
      this.$buefy.toast.open({
        message: message,
        type: type
        });
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
}
</script>