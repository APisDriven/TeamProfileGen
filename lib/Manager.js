// employee Properties
// name, id, email

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber


const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    // getRole() // Overridden to return 'Manager
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
module.exports = Manager;