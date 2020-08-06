import VueFormGenerator from 'vue-form-generator'

export default {
  groups: [
    {
        legend: 'Personal Info',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'First Name',
            model: 'first_name',
            required: true,
            validator: ['string', 'required']
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Last Name',
            model: 'last_name',
            required: true,
            validator: ['string', 'required']
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'City',
            model: 'city',
            required: true,
            validator: ['string', 'required']
          }
        ]
      },
      {
        legend: 'Contact Details',
        fields: [
          {
            type: 'input',
            inputType: 'email',
            label: 'Email',
            model: 'email',
            required: true,
            validator: VueFormGenerator.validators.email
          },
          {
            type: 'tel-input',
            label: 'Phone Number',
            model: 'phone_number'
          }
        ]
      }
  
  ]
}