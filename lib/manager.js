const Employee = require("./employee");

class Manager extends Employee {
  constructor(title, name, id, email, misc) {
    super(name, id, email, misc);
    this.title = title;
    this.misc = misc;
  }
}

module.exports = Manager;
