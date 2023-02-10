const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
function Index() {}
let teamHTML = "";
const team = [];
const {
  initQuestions,
  engineerQuestions,
  managerQuestions,
  internQuestions,
} = require("./utils/questions");
const fs = require("fs");
const inquirer = require("inquirer");

function init() {
  console.log("This is the team building application");
  inquirer.prompt(initQuestions).then(({ role }) => {
    generate(role);
  });
}

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
    buildHTML();
  }
}

function generateManager() {
  inquirer.prompt(managerQuestions).then(({ title, name, id, email, misc }) => {
    const manager = new Manager(title, name, id, email, misc);
    team.push(manager);
    init();
  });
}

function generateEngineer() {
  inquirer
    .prompt(engineerQuestions)
    .then(({ title, name, id, email, misc }) => {
      const engineer = new Engineer(title, name, id, email, misc);
      team.push(engineer);
      init();
    });
}

function generateIntern() {
  inquirer.prompt(internQuestions).then(({ title, name, id, email, misc }) => {
    const intern = new Intern(title, name, id, email, misc);
    team.push(intern);
    init();
  });
}

function generateCard() {
  for (let i = 0; i < team.length; i++) {
    teamHTML += `<div class="card" style="width: 18rem;">
          <div class="card-body bg-success text-light">
            <h5 class="card-title"><strong>${team[i].name}</strong></h5>
            <p class="card-text">${team[i].title}</p>
          </div>
          <ul class="list-group list-group-flush p-3 bg-light">
            <li class="list-group-item">ID #: ${team[i].id}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${team[i].email}">${team[i].email}</a></li>
            <li class="list-group-item">${team[i].misc}</li>
          </ul>
      </div>`;
  }
}

function buildHTML() {
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
  <link rel="stylesheet" href="./utils/style.css">
  <title>Team Profile</title>
</head>
<body>
  <header class="p-3 text-center bg-info text-light">
      <h1>Our Team Page</h1>
  </header>
  <main class="d-flex flex-wrap justify-content-center">
      ${teamHTML}
  </main>
</body>
</html>
  `,
    (err) =>
      err
        ? console.error(err)
        : console.log("Team HTML created. Check your dist folder.")
  );
}

// Function call to initialize app
init();
