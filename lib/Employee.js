// Building class Employee
// Base/Abstract class for various employee types
class Employee {
    constructor(name, employeeID, title, email, phone, department) {
        this.name = name,
        this.employeeID = employeeID,
        this.title = title,
        this.email = emailAddress,
        this.phone = phoneNumber,
        this.department = department
    }

    obtainName() {
        return this.name;
    }

    obtainID() {
        return this.employeeID;
    }

    obtainTitle() {
        return this.title;
    }

    obtainDepartment() {
        return this.department;
    }

    obtainEmailAddress() {
        return this.emailAddress;
    }

    obtainPhoneNumber() {
        return this.phoneNumber;
    }

    obtainBaseEmployeeProfile() {
        return 'Employee';
    }
}

module.exports = Employee;