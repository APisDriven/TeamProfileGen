const { template } = require("@babel/core");
const fs = require("fs");

const path = require("path");

// Templates Directory - I need to create one
const templatesDir = path.resolve(__dirname, "../templates")

const generateHTML = (employees)=>{
    const HTML = [];
    

    // 11:20
    HTML.push(
        employees
            .filter((employee)=>employee.getRole() === "Manager")
            .map((manager)=>renderManager(manager))
    );
        employees
            .filter((employee)=>employee.getRole() === "Engineer")
            .map((engineer)=>renderManager(engineer)
    );
        employees
            .filter((employee)=>employee.getRole() === "Intern")
            .map((intern)=>renderManager(intern)
    );

    return renderFullMarkdown(HTML.join(""));
};

const renderManager = (manager)=>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf8"
    );

    template = replaceTemplates(template, "name",manager.getName());
    template = replaceTemplates(template, "id",manager.getId());
    template = replaceTemplates(template, "role",manager.getRole());
    template = replaceTemplates(template, "email",manager.getEmail());
    template = replaceTemplates(template, "officeNumber",manager.getOfficeNumber());
    return template;
};
const renderEngineer = (engineer)=>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );

    template = replaceTemplates(template, "name",engineer.getName());
    template = replaceTemplates(template, "id",engineer.getId());
    template = replaceTemplates(template, "role",engineer.getRole());
    template = replaceTemplates(template, "email",engineer.getEmail());
    template = replaceTemplates(template, "officeNumber",engineer.getGithub());
    return template;
};
const renderIntern = (intern)=>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "intern.html"),
        "utf8"
    );

    template = replaceTemplates(template, "name",intern.getName());
    template = replaceTemplates(template, "id",intern.getId());
    template = replaceTemplates(template, "role",intern.getRole());
    template = replaceTemplates(template, "email",intern.getEmail());
    template = replaceTemplates(template, "officeNumber",intern.getSchool());
    return template;
};

const renderFullMarkdown = (HTML)=>{
    let template = fs.readFileSync(
        path.resolve(templatesDir, "full-markdown.html"),
        "utf8"
    );

    return replaceTemplates(template, "team", HTML);
};

const replaceTemplates = (template,placeholder,value)=>{
    const pattern = new RegExp(`{{${placeholder}}}`, "gm");
    return template.replace(pattern, value);
}
module.exports = generateHTML;
