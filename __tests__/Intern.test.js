const Intern = require('../lib/Intern');

describe("Intern", () => {
    /*   const mockIntern = {
           name: "Goofy",
           id: "03",
           email: "goofy@mouse.com",
           school: "Clubhouse University",
       };
       */
    describe("constructor tests", () => {
        it("should construct a new instance of intern", () => {
            const intern = new Intern("Goofy",
                "03",
                "goofy@mouse.com",
                "Clubhouse University");
            expect(intern).toBeInstanceOf(Intern);
        });
        it("should construct a new instance of the intern class", () => {
            const intern = new Intern("Goofy",
            "03",
            "goofy@mouse.com",
            "Clubhouse University");
            const mockIntern = 
            expect(intern).toEqual({
                name: "Goofy",
                id: "03",
                email: "goofy@mouse.com",
                school: "Clubhouse University",
                role: "Intern",
            });
        });
    });
    describe("method tests", () => {
        it("should return role when getRole function is called", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getRole()).toEqual("Intern");
        });
    })
})
