// Constructor Arithmetic is imported.
const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");

// A testing suite for Arithmetic is created.
describe("Employee", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("input", () => {
    it("should create an object with a name, id, and email", () => {
      const newName = "";
      const newId = "";
      const newEmail = "";
      const employee = new Employee(newName, newId, newEmail);

      expect(employee.name).toEqual(newName);
      expect(employee.id).toEqual(newId);
      expect(employee.email).toEqual(newEmail);
    });
  });
});

describe("Engineer", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("input", () => {
    it("should create an object with a name, id, email, and misc", () => {
      const newName = "";
      const newId = "";
      const newEmail = "";
      const newMisc = "";
      const engineer = new Engineer(newName, newId, newEmail, newMisc);
      expect(engineer.name).toEqual(newName);
      expect(engineer.id).toEqual(newId);
      expect(engineer.email).toEqual(newEmail);
      //expect(engineer.newMisc).toEqual("Github Username: " + newMisc);
    });
  });
});

describe("Manager", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("input", () => {
    it("should create an object with a name, id, email, and office number", () => {
      const newName = "";
      const newId = "";
      const newEmail = "";
      const manager = new Manager(newName, newId, newEmail);

      expect(manager.name).toEqual(newName);
      expect(manager.id).toEqual(newId);
      //expect(manager.email).toEqual(newEmail);
    });
  });
});
describe("Intern", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("input", () => {
    it("should create an object with a name, id, email, and school", () => {
      const newName = "";
      const newId = "";
      const newEmail = "";
      const intern = new Intern(newName, newId, newEmail);

      expect(intern.name).toEqual(newName);
      expect(intern.id).toEqual(newId);
      //expect(intern.email).toEqual(newEmail);
    });
  });
});
