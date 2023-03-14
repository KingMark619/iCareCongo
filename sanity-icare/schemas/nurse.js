export default {
    name: 'nurse',
    type: 'document',
      title: 'Nurses',
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
        name: 'department',
        type: 'string',
        title: 'Department',
        options: {
            list: [
              { title: 'Emergency', value: 'emergency' },
              { title: 'Triage', value: 'front-desk' },
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