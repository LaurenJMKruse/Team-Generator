// Building class Engineer
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Engineer
class Engineer extends Employee {
    constructor(name, id, title, department, email, phone, gitHub, certifications) {
    super(name, id, title, department, email, phone);
    this.gitHub = gitHub;
    this.certifications = certifications;
    }

    obtainGitHubName() {
        return this.gitHub;
    }

    obtainCertifications() {
        return this.certifications;
    }

    obtainEngineerProfile() {
        return 'Engineer';
    }
}

// Export Engineer
module.exports = Engineer;