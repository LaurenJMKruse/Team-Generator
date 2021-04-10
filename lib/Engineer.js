// Building class Engineer
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Engineer
class Engineer extends Employee {
    constructor(name, employeeID, title, department, emailAddress, phoneNumber, gitHubName) {
    super(name, employeeID, title, department, emailAddress, phoneNumber);
    this.gitHubName = gitHubName;
    }

    obtainGitHubName() {
        return this.gitHubName;
    }

    obtainEngineerProfile() {
        return 'Engineer';
    }
}

// Export Engineer
module.exports = Engineer;