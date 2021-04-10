//***************************
// A. VARIABLES
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.htm');

const render = require('./lib/htmlRenderer');

//***************************
// B. ARRAYS
const teamRoles = [manager, engineer, intern];
const teamEmployees = [];
const employeeIDs = [];

//***************************
// C. FUNCTIONS

// 01. Initialize application
function init() {
    console.log('WELCOME TO THE TEAM BUILDER!');
    console.log('Please follow the prompts to create your team.');
    createTeamMember();
}

// 02. Add Team Member
function createTeamMember() {
    console.log('ACTION: ADD TEAM MEMBER');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `State the employee's full name.`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee identification number.',
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'title',
            message: `What is the employee's title?`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'department',
            message: `State the department.`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the employee's email address?`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'phone',
            message: `What is their phone number?`,
            validate: checkInput(answer)
        },
        {
            type: 'list',
            name: 'roleName',
            message: 'Please select the role you wish to add.',
            choices: teamRoles,
        }
    ]);

    console.log('You have selected the role', roleName);
    
    switch (roleName) {
        case 'manager':
            addManager();
            break;
        
        case 'intern':
            addIntern();
            break;
    
        case 'engineer':
            addEngineer();
            break;
    }
};

// 02. Validate input
function checkInput(userEntry) {
    if (!userEntry) {
        return 'This is a mandatory field.'
    }
};

// 03. Add Manager
function addManager() {
    console.log('ACTION: CREATING MANAGER ROLE');
    inquirer.prompt([
        {
            type: 'input',
            name: 'lineOfBusiness',
            message: `What line of business is the manager's department in?`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'gitHub',
            message: `State the manager's GitHub username.`,
            validate: checkInput(answer)
        }
    ]);
    
    console.log('Manager entry complete.');
};

// 03. Add Engineer
function addEngineer() {
    console.log('ACTION: CREATING ENGINEER ROLE');
    inquirer.prompt([
        {
            type: 'input',
            name: 'certifications',
            message: `List the employee's certifications.`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'gitHub',
            message: `State the employee's GitHub username.`,
            validate: checkInput(answer)
        }
    ]);
    
    console.log('Manager entry complete.');
};

// 04. Add Intern
function addIntern() {
    console.log('ACTION: CREATING INTERN ROLE');
    inquirer.prompt([
        {
            type: 'input',
            name: 'schoolName',
            message: `What school does the intern attend?`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'major',
            message: `What is their major?`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'major',
            message: `What is their minor?`,
            validate: checkInput(answer)
        },
        {
            type: 'input',
            name: 'graduationDate',
            message: `State their expected graduation date.`,
            validate: checkInput(answer)
        }
    ]);
    
    console.log('Intern entry complete.');
};

// 05. Assemble Team



//***************************
// D. MAIN PROCESS
init();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
