const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is you managers name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'office number',
        message: 'What is your office number?',
      },
      {
        type: 'list',
        name: 'role',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer','Intern']
      },
      
]

// team manager’s name, employee ID, email address, and office number

