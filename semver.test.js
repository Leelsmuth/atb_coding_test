const semverObj = require('./semver');

test('throws error if passed with leading zero', () => {
  expect(() => {
    semverObj('01.11.10-alpha');
  }).toThrow();
});