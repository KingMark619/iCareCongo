export default {
    name: 'doctor',
    type: 'document',
    title: 'Doctors',
    fields: [
        {
            name: 'id',
            type: 'number',
            title: 'ID'
        },
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name'
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name'
      },
      {
        name: 'photo',
        type: 'image',
        title: 'Photo'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'phone',
        type: 'number',
        title: 'Phone Number'
      },
      {
        name: 'specialty',
        type: 'string',
        title: 'Specialty',
        // initialValue: 'us-south',
        options: {
        list: [
          { title: 'Pediatry', value: 'pediatry' },
          { title: 'Surgery', value: 'surgery' },
          { title: 'Gynecology',  value: 'gynecology' },
          { title: 'Internal Medicine',  value: 'internal-medicine' },
        ],
         // <-- predefined values
        //layout: 'radio' // <-- defaults to 'dropdown'
      }
      },
      {
        name: 'department',
        type: 'string',
        title: 'Department',
        options: {
            list: [
              { title: 'Emergency', value: 'emergency' },
              { title: 'Children Care', value: 'pediatry' },
              { title: 'Gynecology',  value: 'gynecology' },
              { title: 'Internal Medicine',  value: 'internal-medicine' },
            ],
             // <-- predefined values
            //layout: 'radio' // <-- defaults to 'dropdown'
          }
      },
    ]
  }