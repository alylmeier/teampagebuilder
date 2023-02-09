const Employee = require("./employee");

class Intern extends Employee {
  constructor(title, name, id, email, misc) {
    super(name, id, email);
    this.title = title;
    this.misc = misc;
  }
}

module.exports = Intern;
