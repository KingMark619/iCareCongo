export default {
    name: 'task',
    type: 'document',
      title: 'Tasks',
    fields: [
      {
        name: 'userId',
        type: 'number',
        title: 'User ID'
      },
      {
        name: 'id',
        type: 'number',
        title: 'ID'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      // {
      //   name: 'desc',
      //   type: 'string',
      //   title: 'Description'
      // },
      // {
      //   name: 'date',
      //   type: 'datetime',
      //   title: 'Due Date'
      // },
      //  {
      //   name: 'status',
      //   type: 'boolean',
      //   title: 'Status',
      // },
    ]
  }