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
const actionChoiceArray = [`I want to enter a team member.`, `I'm done adding employees and want to generate my team.`, `I want to exit.`];
const employees = [];


//***************************
// C. FUNCTIONS

// 01. Initialize application
function init() {
    console.log('WELCOME TO THE TEAM BUILDER!');
    console.log(`Please follow the prompts to create your team.\n`);

    determineAction();
}

// 02. Determine action
function determineAction() {
    inquirer.prompt([
        {
            name: 'determineAction',
            type: 'list',
            message: 'What would you like to do?',
            choices: actionChoiceArray
        }    
    ]).then(actionAnswer => {
            const selectedAction = actionAnswer.determineAction;

            switch (selectedAction) {
                case 'I want to enter a team member.':
                    createTeamMember();
                    break;
                
                case `I'm done adding employees and want to generate my team.`:
                    assembleTeam();
                    break;

                case `I want to exit.`:
                   console.log('THANK YOU FOR USING THE TEAM BUILDER!');return;    
            }
    }).catch(error => {
            if(error) {
                console.log(error);
            }
    });
};

// 03. Add Team Member and select role
function createTeamMember() {
    console.log('ACTION: ADD TEAM MEMBER');
    inquirer.prompt([
        {
            name: 'role',
            type: 'list',
            message: `Please select the employee's role.`,
            choices: teamRoles
        }
    ]).then(userAnswers => {        
        employeeType = userAnswers.role;
        
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

// 04. Add Manager
function addManager() {
    console.log('ACTION: CREATING MANAGER ROLE');
    inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: `State the employee's full name.`
        },
        {
            name: 'managerId',
            type: 'input',
            message: `Enter the employee's identification number.`
        },
        {
            name: 'managerTitle',
            type: 'input',
            message: `What is the employee's title?`
        },
        {
            name: 'managerDepartment',
            type: 'input',
            message: `State the employee's department.`,
        },
        {
            name: 'managerEmail',
            type: 'input',    
            message: `What is the employee's email address?`,
        },
        {
            name: 'managerPhone',
            type: 'input',
            message: `What is their phone number?`,
        },
        {
            name: 'managerLineOfBusiness',
            type: 'input',
            message: `What line of business does the manager specialize in?`
        },
        {
            name: 'managerOfficeNumber',
            type: 'input',
            message: `What is the manager's office number?`
        }
    ]).then(managerAnswers => {
        const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerTitle, managerAnswers.managerDepartment, managerAnswers.managerEmail, managerAnswers.managerPhone, managerAnswers.managerLineOfBusiness, managerAnswers.managerOfficeNumber);
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

// 05. Add Engineer
function addEngineer() {
    console.log('ACTION: CREATING ENGINEER ROLE');
    inquirer.prompt([
        {
            name: 'engineerName',
            type: 'input',
            message: `State the employee's full name.`
        },
        {
            name: 'engineerId',
            type: 'input',
            message: `Enter the employee's identification number.`
        },
        {
            name: 'engineerTitle',
            type: 'input',
            message: `What is the employee's title?`
        },
        {
            name: 'engineerDepartment',
            type: 'input',
            message: `State the employee's department.`,
        },
        {
            name: 'engineerEmail',
            type: 'input',    
            message: `What is the employee's email address?`,
        },
        {
            name: 'engineerPhone',
            type: 'input',
            message: `What is their phone number?`,
        },
        {
            name: 'engineerCertifications',
            type: 'input',
            message: `List the employee's certifications.`
        },
        {
            name: 'engineerGitHub',
            type: 'input',
            message: `State the employee's GitHub username.`
        }
    ]).then(engineerAnswers => {
        const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerTitle, engineerAnswers.engineerDepartment, engineerAnswers.engineerEmail, engineerAnswers.engineerPhone, engineerAnswers.engineerCertifications, engineerAnswers.engineerGitHub);
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

// 06. Add Intern
function addIntern() {
    console.log('ACTION: CREATING INTERN ROLE');
    inquirer.prompt([
        {
            name: 'internName',
            type: 'input',
            message: `State the employee's full name.`
        },
        {
            name: 'internId',
            type: 'input',
            message: `Enter the employee's identification number.`
        },
        {
            name: 'internTitle',
            type: 'input',
            message: `What is the employee's title?`
        },
        {
            name: 'internDepartment',
            type: 'input',
            message: `State the employee's department.`,
        },
        {
            name: 'internEmail',
            type: 'input',    
            message: `What is the employee's email address?`,
        },
        {
            name: 'internPhone',
            type: 'input',
            message: `What is their phone number?`,
        },
        {
            name: 'internSchool',
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
            name: 'internGraduationDate',
            type: 'input',
            message: `State their expected graduation date.`
        }
    ]).then(internAnswers => {
        const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internTitle, internAnswers.internDepartment, internAnswers.internEmail, internAnswers.internPhone, internAnswers.internSchool, internAnswers.internMajor, internAnswers.internMinor, internAnswers.internGraduationDate);
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

// 07. Assemble team
function assembleTeam() {
    // Create Output directory, if needed
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }

    console.log('ACTION: TEAM BEING ASSEMBLED');
    fs.writeFileSync(outputPath, render(employees), 'utf-8');
};

//***************************
// D. MAIN PROCESS
init();