const determinePrecedence = require('./index');

test('test for major - true', () => {
  expect(determinePrecedence('1.11.10-alpha', '0.10.9')).toBe(true);
});

test('test for major - false', () => {
  expect(determinePrecedence('1.11.10-alpha', '2.12.9')).toBe(false);
});

test('test for minor - true', () => {
  expect(determinePrecedence('1.11.10-alpha', '1.10.9')).toBe(true);
});

test('test for minor - false', () => {
  expect(determinePrecedence('1.11.10-alpha', '1.12.9')).toBe(false);
});

test('test for patch - true', () => {
  expect(determinePrecedence('2.13.10-alpha', '2.12.91')).toBe(true);
});

test('test for patch - false', () => {
  expect(determinePrecedence('1.11.10-alpha', '1.12.11')).toBe(false);
});
