const { it } = require('test');
const Intern = require('../lib/Intern');

describe("Intern",()=> {
    const mockIntern = {
        name: "Goofy",
        id: 03,
        email: "goofy@mouse.com",
        school: "Clubhouse University",
    };
    describe("constructor tests", ()=>{
        it("should construct a new instance of intern", ()=>{
            const intern = new Intern(mockIntern);
            expect(intern).toBeInstanceOf(Intern);        
        });
        it("should construct a new instance of the intern class", ()=>{
            const intern = new Intern(mockIntern);
            expect(intern).toEqual({
                name: "Goofy",
                id: 03,
                email: "goofy@mouse.com",
                school: "Clubhouse University",
                role: "Intern",  
            });
        });
    });
    describe("method tests", ()=>{
        it("should return name when getName function is called", ()=>{
            const intern = new Intern(mockIntern);
            expect(intern.getName()).toEqual("Goofy");
        });
        it("should return id when getId function is called", ()=>{
            const intern = new Intern(mockIntern);
            expect(intern.getId()).toEqual(03);
        });
        it("should return email when getEmail function is called", ()=>{
            const intern = new Intern(mockIntern);
            expect(intern.getEmail()).toEqual("goofy@mouse.com");
        });
        it("should return school when getSchool function is called", ()=>{
            const intern = new Intern(mockIntern);
            expect(intern.getSchool()).toEqual("Clubhouse University");
        });
        it("should return role when getRole function is called", ()=>{
            const intern = new Intern(mockIntern);
            expect(intern.getRole()).toEqual("Intern");
        });
    })
})
