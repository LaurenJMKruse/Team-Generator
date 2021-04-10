// Building class Manager
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Manager
class Manager extends Employee {
    constructor(name, id, title, department, email, phone, gitHub) {
    super(name, id, title, department, email, phone);
    this.lineOfBusiness = lineOfBusiness;
    this.gitHub = gitHub;
    }

    obtainGitHubName() {
        return this.gitHub;
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