export default {
    name: 'task',
    type: 'document',
      title: 'Tasks',
    fields: [
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
      {
        name: 'desc',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Due Date'
      },
       {
        name: 'status',
        type: 'boolean',
        title: 'Status',
      },
    ]
  }