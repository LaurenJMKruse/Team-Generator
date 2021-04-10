// Building class Intern
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Intern
class Intern extends Employee {
    constructor(name, employeeID, title, department, emailAddress, phoneNumber, schoolName, major, minor, graduationDate) {
        super(name, employeeID, title, department, emailAddress, phoneNumber);
        this.schoolName = schoolName;
        this.major = major;
        this.minor = minor;
        this.graduationDate = graduationDate;
    }

    obtainSchoolName() {
        return this.schoolName;
    }

    obtainMajor() {
        return this.major;
    }

    obtainMinor() {
        return this.minor;
    }

    obtainGraduationDate() {
        return this.graduationDate;
    }

    obtainInternProfile() {
        return 'Intern';
    }
}

// Export Intern
module.exports = Intern;