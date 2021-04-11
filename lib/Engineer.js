// Building class Engineer
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Engineer
class Engineer extends Employee {
    constructor(employeeName, employeeId, title, department, emailAddress, phoneNumber, gitHubName, certifications) {
    super(employeeName, employeeId, title, department, emailAddress, phoneNumber);
    this.gitHubName = gitHubName;
    this.certifications = certifications;
    }

    getGitHubName() {
        return this.gitHubName;
    }

    getCertifications() {
        return this.certifications;
    }

    getRole() {
        return 'Engineer';
    }
}

// Export Engineer
module.exports = Engineer;