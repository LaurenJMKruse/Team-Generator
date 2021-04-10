// Building class Employee
// Base/Abstract class for various employee types
class Employee {
    constructor(name, id, title, email, phone, department) {
        this.name = name,
        this.id = id,
        this.title = title,
        this.email = email,
        this.phone = phone,
        this.department = department
    }

    obtainName() {
        return this.name;
    }

    obtainID() {
        return this.id;
    }

    obtainTitle() {
        return this.title;
    }

    obtainDepartment() {
        return this.department;
    }

    obtainEmailAddress() {
        return this.email;
    }

    obtainPhoneNumber() {
        return this.phone;
    }

    obtainBaseEmployeeProfile() {
        return 'Employee';
    }
}

module.exports = Employee;