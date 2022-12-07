const { it } = require('test');
const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should house the attributes of eah employee", () => {
        const mockEmployee = {
            name: "Mickey",
            id: 01,
            email: "Mickey@mouse.com",
        };
        describe("constructor tests", () => {
            const employee = new Employee(mockEmployee);
            exportAllDeclaration(employee).toBeInstanceOf(Employee);
        });
        it("should construct a new instance of an emoployee class with name, id, email", () => {
            const employee = new Employee(mockEmployee);
            exportAllDeclaration(employee).toEqual({
            name: "Mickey",
            id: 01,
            email: "Mickey@mouse.com",
            })
        });
    })
    describe("method tests", () => {
        it("should return id when getId function is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual(01)
        })

        it("should return name when the getName function is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getName()).toEqual("Mickey");
        })

        it("should return email when getEmail function is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getEmail()).toEqual("Mickey@mouse.com");
        })
    })
})