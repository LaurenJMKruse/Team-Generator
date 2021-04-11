//***************************
// A. VARIABLES

// 01. Dependencies
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// 02. File paths
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// 03. HTML
const render = require('./lib/htmlRenderer');

// 04. Global
let employeeType;

//***************************
// B. ARRAYS
const teamRoles = ['Manager', 'Engineer', 'Intern'];
const actionChoiceArray = [`I want to enter another team member.`, `I'm done adding employees.`];
const employees = [];

//***************************
// C. FUNCTIONS

// 01. Initialize application
function init() {
    console.log('WELCOME TO THE TEAM BUILDER!');
    console.log(`Please follow the prompts to create your team.\n`);
    createTeamMember();
}

// 02. Add Team Member
function createTeamMember() {
    console.log('ACTION: ADD TEAM MEMBER');
    inquirer.prompt([
        {
            name: 'employeeName',
            type: 'input',
            message: `State the employee's full name.`
        },
        {
            name: 'employeeID',
            type: 'input',
            message: `Enter the employee's identification number.`
        },
        {
            name: 'title',
            type: 'input',
            message: `What is the employee's title?`
        },
        {
            name: 'department',
            type: 'input',
            message: `State the employee's department.`,
        },
        {
            name: 'emailAddress',
            type: 'input',    
            message: `What is the employee's email address?`,
        },
        {
            name: 'phoneNumber',
            type: 'input',
            message: `What is their phone number?`,
        },
        {
            name: 'roleName',
            type: 'list',
            message: 'Please select the role you wish to add.',
            choices: teamRoles
        }
    ]).then(userAnswers => {        
        employeeType = userAnswers.roleName;
        
        console.log('You have selected the role', employeeType);
    
        switch (employeeType) {
            case 'Manager':
                addManager();
                break;
        
            case 'Intern':
                addIntern();
                break;
    
            case 'Engineer':
                addEngineer();
                break;
        }
    }).catch(error => {
        if(error){
            console.log(error);
        }
    });
};

// 02. Add Manager
function addManager() {
    console.log('ACTION: CREATING MANAGER ROLE');
    inquirer.prompt([
        {
            name: 'lineOfBusiness',
            type: 'input',
            message: `What line of business is the manager's department in?`
        },
        {
            name: 'gitHubName',
            type: 'input',
            message: `State the manager's GitHub username.`
        }
    ]).then(managerAnswers => {
        const manager = new Manager(managerAnswers.lineOfBusiness, managerAnswers.gitHubName);
        employees.push(manager);
        console.log(employees);

        console.log('Manager entry complete.');
        
        determineAction();
    }).catch(error => {
        if(error){
            console.log(error);
        }
    });
};

// 03. Add Engineer
function addEngineer() {
    console.log('ACTION: CREATING ENGINEER ROLE');
    inquirer.prompt([
        {
            name: 'certifications',
            type: 'input',
            message: `List the employee's certifications.`
        },
        {
            name: 'gitHubName',
            type: 'input',
            message: `State the employee's GitHub username.`
        }
    ]).then(engineerAnswers => {
        const engineer = new Engineer(engineerAnswers.certifications, engineerAnswers.gitHubName);
        employees.push(engineer);
        console.log(employees)

        console.log('Engineer entry complete.');

        determineAction();
    }).catch(error => {
        if(error){
            console.log(error);
        }
    });
};

// 04. Add Intern
function addIntern() {
    console.log('ACTION: CREATING INTERN ROLE');
    inquirer.prompt([
        {
            name: 'schoolName',
            type: 'input',
            message: `What school does the intern attend?`
        },
        {
            name: 'internMajor',
            type: 'input',
            message: `What is their major?`
        },
        {
            name: 'internMinor',
            type: 'input',
            message: `What is their minor?`
        },
        {
            name: 'graduationDate',
            type: 'input',
            message: `State their expected graduation date.`
        }
    ]).then(internAnswers => {
        const intern = new Intern(internAnswers.schoolName, internAnswers.internMajor, internAnswers.internMinor, internAnswers.graduationDate);
        employees.push(intern);
        console.log(employees);

        console.log('Intern entry complete.');
        
        determineAction();
    }).catch(error => {
        if(error){
            console.log(error);
        }
    });
};

// 06. Determine next action
function determineAction() {
    inquirer.prompt([
        {
            name: 'nextAction',
            type: 'list',
            message: 'What do you wish to do next?',
            choices: actionChoiceArray
        }    
    ]).then(actionAnswer => {
            const selectedAction = actionAnswer.nextAction;

            switch (selectedAction) {
                case 'I want to enter another team member.':
                    createTeamMember();
                    break;
                
                case `I'm done adding employees.`:
                    assembleTeam();
                    break;
            }
    }).catch(error => {
            if(error) {
                console.log(error);
            }
    });
        
    console.log('Next action determined.');
};

// 07. Assemble team
function assembleTeam() {
    console.log('ACTION: TEAM BEING ASSEMBLED');
    fs.writeFileSync(outputPath, render(employees), 'utf-8');
};

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
