const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const team = [];
const {
  initQuestions,
  engineerQuestions,
  managerQuestions,
  internQuestions,
} = require("./utils/questions");
const fs = require("fs");
//const makeTeampage = require("./dist/output.html");
const inquirer = require("inquirer");

function init() {
  console.log("This is the team building application");
  inquirer.prompt(initQuestions).then(({ role }) => {
    console.log(role);
    generate(role);

    //writeToFile("./dist/output.html", data);
  });
}

const generatePage = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the index.html"
      );
    }
  });
};

function generate(role) {
  if (role === "Manager") {
    generateManager();
  } else if (role === "Engineer") {
    generateEngineer();
  } else if (role === "Intern") {
    generateIntern();
  } else {
    console.log(team);
    //generatePage(team);
  }
}

function generateManager() {
  inquirer.prompt(managerQuestions).then(({ name, id, email, office }) => {
    const manager = new Manager(name, id, email, office);
    team.push(manager);
    init();
  });
}

function generateEngineer() {
  inquirer.prompt(engineerQuestions).then(({ name, id, email, ghuser }) => {
    const engineer = new Engineer(name, id, email, ghuser);
    team.push(engineer);
    init();
  });
}

function generateIntern() {
  inquirer.prompt(internQuestions).then(({ name, id, email, school }) => {
    const intern = new Intern(name, id, email, school);
    team.push(intern);
    init();
  });
}

//module.exports = Generate;
// Function call to initialize app
init();
