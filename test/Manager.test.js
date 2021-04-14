const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Paul", 178, "Head Honcho", "Promotional Shindigs", "paul@thiscoolcompany.com", "203-227-8810", "Wining and Dining Wealthy Clients", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test(`getRole() should return "Manager"`, () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Paul", 178, "Head Honcho", "Promotional Shindigs", "paul@thiscoolcompany.com", "203-227-8810", "Wining and Dining Wealthy Clients", testValue);
  expect(e.getOffice()).toBe(testValue);
});
