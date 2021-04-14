// Building class Intern
// Sub-class of base/abstract class Employee

// Import Employee
const Employee = require('./Employee');

// Build Intern
class Intern extends Employee {
    constructor(name, id, title, department, email, phone, school, major, minor, graduationDate) {
        super(name, id, title, department, email, phone);
        this.school = school;
        this.major = major;
        this.minor = minor;
        this.graduationDate = graduationDate;
    }

    getSchool() {
        return this.school;
    }

    getMajor() {
        return this.major;
    }

    getMinor() {
        return this.minor;
    }

    getGraduationDate() {
        return this.graduationDate;
    }

    getRole() {
        return 'Intern';
    }
}

// Export Intern
module.exports = Intern;