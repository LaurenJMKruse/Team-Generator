// Building class Manager
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Manager
class Manager extends Employee {
    constructor(name, employeeID, title, department, emailAddress, phoneNumber, gitHubName) {
    super(name, employeeID, title, department, emailAddress, phoneNumber);
    this.lineOfBusiness = lineOfBusiness;
    this.gitHubName = gitHubName;
    }

    obtainGitHubName() {
        return this.gitHubName;
    }

    obtainLineOfBusiness() {
        return this.lineOfBusiness;
    }

    obtainEngineerProfile() {
        return 'Manager';
    }
}

// Export Manager
module.exports = Manager;