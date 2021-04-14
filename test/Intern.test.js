const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Wilberforce", 329, "Coffee and Tea Fetcher", "Sneaker Testing", "youngpup@stodgyfrumpcorporation.com", "991-370-9870", testValue);
  expect(e.school).toBe(testValue);
});

test(`getRole() should return "Intern"`, () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Wilberforce", 329, "Coffee and Tea Fetcher", "Sneaker Testing", "youngpup@stodgyfrumpcorporation.com", "991-370-9870", testValue);;
  expect(e.getSchool()).toBe(testValue);
});