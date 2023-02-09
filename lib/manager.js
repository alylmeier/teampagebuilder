const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }
}

// const manager = new Manager("Aly", 9, "aly@aly.com", 700);
// console.log(manager);
//   rectangle.printInfo();

module.exports = Manager;
