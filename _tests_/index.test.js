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
    it("should create an object with a title, name, id, email, and misc", () => {
      const newTitle = "";
      const newName = "";
      const newId = "";
      const newEmail = "";
      const newMisc = "";
      const engineer = new Engineer(
        newTitle,
        newName,
        newId,
        newEmail,
        newMisc
      );
      expect(engineer.title).toEqual(newTitle);
      expect(engineer.name).toEqual(newName);
      expect(engineer.id).toEqual(newId);
      expect(engineer.email).toEqual(newEmail);
      expect(engineer.misc).toEqual("Github Username: " + newMisc);
    });
  });
});

describe("Manager", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("input", () => {
    it("should create an object with a title name, id, email, and misc", () => {
      const newTitle = "";
      const newName = "";
      const newId = "";
      const newEmail = "";
      const newMisc = "";
      const manager = new Manager(newTitle, newName, newId, newEmail, newMisc);
      expect(manager.title).toEqual(newTitle);
      expect(manager.name).toEqual(newName);
      expect(manager.id).toEqual(newId);
      expect(manager.email).toEqual(newEmail);
      expect(manager.misc).toEqual("Office number: " + newMisc);
    });
  });
});
describe("Intern", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("input", () => {
    it("should create an object with a title, name, id, email, and misc", () => {
      const newTitle = "";
      const newName = "";
      const newId = "";
      const newEmail = "";
      const newMisc = "";
      const intern = new Intern(newTitle, newName, newId, newEmail, newMisc);

      expect(intern.title).toEqual(newTitle);
      expect(intern.name).toEqual(newName);
      expect(intern.id).toEqual(newId);
      expect(intern.email).toEqual(newEmail);
      expect(intern.misc).toEqual("Attends: " + newMisc);
    });
  });
});
