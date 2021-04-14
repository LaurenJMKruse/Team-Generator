const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Axel Peters", 401, "Head of Measurements", "Protractors and Compasses", "ap@professionaledge.com", "627-228-1789", "PhD in Imperial Units", testValue);
  expect(e.gitHub).toBe(testValue);
});

test(`getRole() should return "Engineer"`, () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Axel Peters", 401, "Head of Measurements", "Protractors and Compasses", "ap@professionaledge.com", "627-228-1789", "PhD in Imperial Units", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
