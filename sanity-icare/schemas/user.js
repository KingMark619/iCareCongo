export default {
    name: 'user',
    type: 'document',
    title: 'Users',
    fields: [
       
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
        name: 'id',
        type: 'number',
        title: 'ID'
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password'
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
        name: 'role',
        type: 'string',
        title: 'Role',
        options: {
            list: [
              { title: 'Doctor', value: 'doctor' },
              { title: 'Nurse', value: 'nurse' },
              { title: 'Front Desk',  value: 'frontDesk' },
              { title: 'Management',  value: 'management' },
            ],
             // <-- predefined values
            //layout: 'radio' // <-- defaults to 'dropdown'
          }
      },
      // {
      //   title: 'Auto Password',
      //   name: 'passwordAuto',
      //   type: 'slug',
       
      //   options: {
      //     source: 'firstName',
      //     maxLength: 200, // will be ignored if slugify is set
      //     slugify: input => input
      //                          .toLowerCase()
      //                          .replace(/\s+/g, '-')
      //                          .slice(0, 20)
      //   }
      // }
    ]
  }