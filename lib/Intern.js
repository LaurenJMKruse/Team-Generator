// Building class Intern
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Intern
class Intern extends Employee {
    constructor(employeeName, employeeId, title, department, emailAddress, phoneNumber, schoolName, internMajor, internMinor, graduationDate) {
        super(employeeName, employeeId, title, department, emailAddress, phoneNumber);
        this.schoolName = schoolName;
        this.internMajor = internMajor;
        this.internMinor = internMinor;
        this.graduationDate = graduationDate;
    }

    getSchoolName() {
        return this.schoolName;
    }

    getMajor() {
        return this.internMajor;
    }

    getMinor() {
        return this.internMinor;
    }

    getGraduationDate() {
        return this.graduationDate;
    }

    getInternProfile() {
        return 'Intern';
    }
}

// Export Intern
module.exports = Intern;