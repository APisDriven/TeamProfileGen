const { it } = require('test');
const Manager = require('../lib/Manager');

describe("Manager",()=>{
    const mockManager = {
        name: "Pete",
        id: 04,
        email: "pete@mouse.com",
        officeNumber: 313,
    };
    describe("constructor tests",()=>{
        it("should construct a new instance of manager",()=>{
            const manager = new Manager(mockManager);
            expect(manager).toBeInstanceOf(Manager);
        });
        it("should construct a new instance of manager with name, id, email amnd office number",()=>{
            expect(manager).toEqual({
                name: "Pete",
                id: 04,
                email: "pete@mouse.com",
                officeNumber: 313,
            });
        });
    });
    describe("method tests",()=>{
        it("should return name when the getName function is called",()=>{
            const manager = new Manager(mockManager);
            expect(manager.getName()).toEqual("Pete");
        });
        it("should return id when the getId function is called",()=>{
            const manager = new Manager(mockManager);
            expect(manager.getId()).toEqual(04);
        });
        it("should return email when the getEmail function is called",()=>{
            const manager = new Manager(mockManager);
            expect(manager.getEMail()).toEqual("pete@mouse.com");
        });
        it("should return office number when the getOfficeNumber function is called",()=>{
            const manager = new Manager(mockManager);
            expect(manager.getOfficeNumber()).toEqual(313);
        });
        it("should return role when the getRole function is called",()=>{
            const manager = new Manager(mockManager);
            expect(manager.getRole()).toEqual("Manager");
        });
    })
})
