// Building class Employee
// Base/Abstract class for various employee types
class Employee {
    constructor(employeeName, employeeId, title, department, emailAddress, phoneNumber) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.title = title;
        this.department = department;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }

    getEmployeeName() {
        return this.employeeName;
    }

    getEmployeeId() {
        return this.employeeId;
    }

    getTitle() {
        return this.title;
    }

    getDepartment() {
        return this.department;
    }

    getEmailAddress() {
        return this.emailAddress;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getBaseEmployeeProfile() {
        return 'Employee';
    }
}

module.exports = Employee;