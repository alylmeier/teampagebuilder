const Employee = require("./employee");

class Manager extends Employee {
  constructor(title, name, id, email, misc) {
    super(name, id, email, misc);
    this.title = title;
    this.misc = "Office number: " + misc;
  }
}

module.exports = Manager;
