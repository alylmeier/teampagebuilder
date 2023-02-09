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
    message:
      "Please enter their job title as you wish it to appear on the page",
    name: "title",
  },
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
    name: "misc",
  },
];

const managerQuestions = [
  {
    type: "input",
    message:
      "Please enter their job title as you wish it to appear on the page",
    name: "title",
  },
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
    name: "misc",
  },
];
const internQuestions = [
  {
    type: "input",
    message:
      "Please enter their job title as you wish it to appear on the page",
    name: "title",
  },
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
    name: "misc",
  },
];

module.exports = {
  initQuestions,
  engineerQuestions,
  managerQuestions,
  internQuestions,
};
