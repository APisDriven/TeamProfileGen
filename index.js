const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'manager',
        message: 'Team member managers name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Team members employee ID?',
      },
      {
        type: 'list',
        name: 'email',
        message: 'Team member email address?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Installation instructions?',
      },
      
]

// team manager’s name, employee ID, email address, and office number

