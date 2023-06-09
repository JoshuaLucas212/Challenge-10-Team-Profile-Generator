const Engineer = require("../lib/Engineer");

test('tests if engineer is a new object created', () => {
  const engineer = new Engineer('Josh', 44, 'josh@company.com')

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
})