const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, ghuser) {
    super(name, id, email);
    this.ghuser = ghuser;
  }
}

module.exports = Engineer;
