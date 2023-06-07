export default {
    name: 'appointments',
    type: 'document',
      title: 'Appointments',
    fields: [
        {
            name: 'id',
            type: 'number',
            title: 'Patient ID'
        },
      {
        name: 'Name',
        type: 'string',
        title: 'Full Name'
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Date'
      },
      {
        name: 'location',
        type: 'number',
        title: 'Location',
        options: {
            list: [
              { title: 'Room 1', value: 1 },
              { title: 'Room 2', value: 2},
              { title: 'Room 3',  value: 3 },
            ],
             // <-- predefined values
            //layout: 'radio' // <-- defaults to 'dropdown'
          }
      },
      {
        name: 'purpose',
        type: 'string',
        title: 'Purpose of visit'
      },
      {
        name: 'phone',
        type: 'number',
        title: 'Phone Number'
      },
      {
        name: 'duration',
        type: 'number',
        title: 'Duration',
        // initialValue: 'us-south',
        options: {
        list: [
          { title: '0', value: 0 },
          { title: '15 min', value: 15 },
          { title: '30 min',  value: 30 },
          { title: '45 min',  value: 45 },
          { title: '60 min',  value: 60 },
        ],
         // <-- predefined values
        //layout: 'radio' // <-- defaults to 'dropdown'
      }
      },
      {
        name: 'type',
        type: 'boolean',
        title: 'Online consultation',
        // options: {
        //     list: [
        //       { title: 'Online', value: true },
        //       { title: 'Offline', value: false },
        //       { title: 'Gynecology',  value: 'gynecology' },
        //       { title: 'Internal Medicine',  value: 'internal-medicine' },
        //     ],
        //      // <-- predefined values
        //     //layout: 'radio' // <-- defaults to 'dropdown'
        //   }
      },
    ]
  }