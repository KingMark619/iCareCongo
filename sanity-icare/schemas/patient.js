export default {
    name: 'patient',
    type: 'document',
      title: 'Patients',
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
        name: 'emergencyName',
        type: 'string',
        title: 'Emergency Contact'
      },
      {
        name: 'emergencyPhone',
        type: 'number',
        title: 'Emergency Contact Number'
      },
      {
        name: 'bp',
        type: 'string',
        title: 'Blood Presure'
      },
      {
        name: 'height',
        type: 'number',
        title: 'Height'
      },
      {
        name: 'weight',
        type: 'number',
        title: 'Weight'
      },
      {
        name: 'bmi',
        type: 'number',
        title: 'Body Mass Index'
      },
      {
        name: 'allergies',
        type: 'string',
        title: 'Allergies'
      },
      {
        name: 'medHistory',
        type: 'string',
        title: 'Medical History'
      },
      
    ]
  }