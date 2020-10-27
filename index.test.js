// import * as helpers from './index';

const determinePrecedence = require('./index');

// const determinePrecedence = require('./index');

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
  expect(determinePrecedence('1.11.10-alpha', '1.10.9')).toBe(true);
});

test('test for patch - false', () => {
  expect(determinePrecedence('1.11.10-alpha', '1.12.11')).toBe(false);
});

// test('throws error if passed with leading zero', () => {
//   expect(determinePrecedence('01.11.10-alpha', '1.10.9')).toThrow('Error: Invalid sermver');
// });

// describe('determine Precedence', () => {

//   it('returns true if criteria is met', () => {
//     expect(helpers.determinePrecedence('1.11.10-alpha', '1.10.9')).toBe(true);
//   });

// });