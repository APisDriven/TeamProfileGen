const Engineer = require('../lib/Engineer');

describe("Engineer",() => {
    const mockEngineer = {
        name: "Donald",
        id: "02",
        email: "Donald@duck.com",
        github: "www.github.com/donald_duck",
        role: "Engineer"
    };
    describe ("constructor tests",() => {
        it("should construct a new instance of the engineer class",()=>{
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toBenInstanceOf(Engineer);
        });
        it("should construct a new instance of engineer class with name, id, email & github", ()=>{
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toEqual({
                name: "Donald",
                id: "02",
                email: "Donald@duck.com",
                github: "www.github.com/donald_duck",
                role: "Engineer",
            });
        })
    })

    describe("method tests",()=>{


        it("should return github link when the getGithub function is called", ()=> {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getGithub()).toEqual("www.github.com/donald_duck");
        });

        it("should return role when the getRole function is called", ()=> {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});