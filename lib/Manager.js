// Building class Manager
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Manager
class Manager extends Employee {
    constructor(name, id, title, department, email, phone, lineOfBusiness, officeNumber) {
    super(name, id, title, department, email, phone);
    this.lineOfBusiness = lineOfBusiness;
    this.officeNumber = officeNumber;
    }

    getLineOfBusiness() {
        return this.lineOfBusiness;
    }
   
    getOffice() {
        return this.officeNumber;
    }

   getRole() {
        return 'Manager';
    }
}

// Export Manager
module.exports = Manager;