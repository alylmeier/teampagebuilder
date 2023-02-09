const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let teamHTML = "";
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

// const generatePage = (data) => {
//   fs.writeFile("./dist/index.html", data, (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       console.log(
//         "Your team profile has been successfully created! Please check out the index.html"
//       );
//     }
//   });
// };

function generate(role) {
  if (role === "Manager") {
    generateManager();
  } else if (role === "Engineer") {
    generateEngineer();
  } else if (role === "Intern") {
    generateIntern();
  } else {
    console.log(team);
    generateCard();
    generatePage();
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
function generateCard() {
  for (let i = 0; i < team.length; i++) {
    teamHTML += `<div class="card mx-3 my-5" style="width: 18rem;">
          <div class="card-body bg-primary text-light">
            <h5 class="card-title"><strong>${team.name}</strong></h5>
            <p class="card-text">Manager</p>
          </div>
          <ul class="list-group list-group-flush p-3 bg-light">
            <li class="list-group-item">ID #: ${team.id}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${team.email}">${team.email}</a></li>
            <li class="list-group-item">${team.misc}</li>
          </ul>
      </div>`;
  }
}

function generatePage() {
  fs.writeFile(
    "./dist/output.html",
    `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
  <header class="p-3 text-center bg-danger text-light">
      <h1>My Team</h1>
  </header>
  <main class="d-flex flex-wrap justify-content-center">
      ${teamHTML}
  </main>
</body>
</html>
  `,
    (err) => (err ? console.error(err) : console.log("HTML file created!"))
  );
}

//module.exports = Generate;
// Function call to initialize app
init();
