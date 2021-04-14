// Building class Employee
// Base/Abstract class for various employee types
class Employee {
    constructor(name, id, title, department, email, phone) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.department = department;
        this.email = email;
        this.phone = phone;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDepartment() {
        return this.department;
    }

    getEmail() {
        return this.email;
    }

    getPhone() {
        return this.phone;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;