const initQuestions = [
  {
    type: "list",
    message: "Which type of employee would you like to create?",
    choices: ["Manager", "Engineer", "Intern", "None, create my teampage"],
    name: "role",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is their GitHub user name?",
    name: "ghuser",
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is their office number?",
    name: "office",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What school do they attend?",
    name: "school",
  },
];

module.exports = {
  initQuestions,
  engineerQuestions,
  managerQuestions,
  internQuestions,
};
