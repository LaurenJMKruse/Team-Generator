// Building class Engineer
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Engineer
class Engineer extends Employee {
    constructor(name, id, title, department, email, phone, certifications, gitHub) {
    super(name, id, title, department, email, phone);
    this.certifications = certifications;
    this.gitHub = gitHub;
    }

    getCertifications() {
        return this.certifications;
    }
    
    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }
}

// Export Engineer
module.exports = Engineer;