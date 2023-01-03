const inquirer = require('inquirer');

const Manager = require(`./lib/Manager`);

const Intern = require(`./lib/Intern`);

const Engineer = require(`./lib/Engineer`);

const employees = [];

const fs = require("fs");

const generateHTML = require(`./utils/generateHTML`);

let isTeamComplete = false;

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
        choices: ['Engineer','Intern','None']
      },
      
]

const validateInput = (userInput) => {
    if (userInput === "") {
        return "your answer cannot be blank";
    } else {
        return true;
    }
};

const init = async ()=> {
    await createManager();

    // create a team - function

    while(!isTeamComplete){
        const employeeTypeQuestion = [
            {
                type: "list",
                message: "Please select the employee type you want to add:",
                name: "employeeType",
                choices:[
                    {name: "Engineer", value: "engineer", short: "Engineer"},
                    {name: "Intern", value: "intern", short: "Intern"},
                    {name: "None", value: "none", short: "None"},
                ]
            }
        ]

        const {employeeType} = await inquirer.prompt(employeeTypeQuestion);

        if (employeeType === "none"){
            isTeamComplete = true;
        } else {
            if(employeeType === "engineer"){
                await createEngineer();
            }
            if(employeeType === "intern"){
                await createIntern();
            }
        }
    }

    const HTML = generateHTML(employees);
    fs.writeFileSync("team-profile.html", HTML, (err) =>{
        if(err){
            console.log(err)
;        }else{
    console.log("HTML file created");
}
    });
};

const createManager = async()=>{
    const managerQuestions = [
        {
            type: "input",
            message: "Enter Manager name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter work email:",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter Office Number:",
            name: "officeNumber",
            validate: validateInput,
        }
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);

    employees.push(manager);
};

const createEngineer = async()=>{
    const engineerQuestions = [
        {
            type: "input",
            message: "Please enter engineer name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Please enter engineer ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Please enter engineer email:",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Please enter engineer github link:",
            name: "github",
            validate: validateInput,
        },
    ];

    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);

    employees.push(engineer);
};

const createIntern = async()=>{
    const internQuestions = [
        {
            type: "input",
            message: "Enter Intern name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter Intern ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter Intern email:",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter Intern school:",
            name: "school",
            validate: validateInput,
        },
    ];

    const internAnswers = await inquirer.prompt(internQuestions);

    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);

    employees.push(intern);
};

init();


