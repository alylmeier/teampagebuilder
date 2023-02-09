const Employee = require("./employee");

class Engineer extends Employee {
  constructor(title, name, id, email, misc) {
    super(name, id, email);
    this.title = title;
    this.misc = "Github Username: " + misc;
  }
}

module.exports = Engineer;
