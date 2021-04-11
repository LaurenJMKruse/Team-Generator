// Building class Manager
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Manager
class Manager extends Employee {
    constructor(employeeName, employeeId, title, department, emailAddress, phoneNumber, lineOfBusiness, gitHubName) {
    super(employeeName, employeeId, title, department, emailAddress, phoneNumber);
    this.lineOfBusiness = lineOfBusiness;
    this.gitHubName = gitHubName;
    }

    getGitHubName() {
        return this.gitHubName;
    }

    getLineOfBusiness() {
        return this.lineOfBusiness;
    }

   getManagerProfile() {
        return 'Manager';
    }
}

// Export Manager
module.exports = Manager;