const semverObj = require('./semver');

test('throws error if passed with leading zero', () => {
  expect(() => {
    semverObj('01.11.10-alpha');
  }).toThrow();
});

test('test that functions return value for major version', () => {
  expect(semverObj('1.11.10-alpha').major).toBe(1);
});

test('test that functions return value for minor version', () => {
  expect(semverObj('1.11.10-alpha').minor).toBe(11);
});

test('test that functions return value for patch version and removes alpha, beta etc', () => {
  expect(semverObj('1.11.10-alpha').patch).toBe(10);
});