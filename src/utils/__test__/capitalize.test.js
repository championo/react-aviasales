//const  utils  = require('../utils');
//import { capitalize } from '../utils';
import utils  from '../utils';
/*
test('Without argument', () => {
  expect(utils.capitalize()).toBe('');
});
*/
test('Argument is null', () => {
  expect(utils.capitalize(null)).toBe('');
});

test('Argument is undefined', () => {
  expect(utils.capitalize(undefined)).toBe('');
});

test('Argument is {} (empty object)', () => {
  expect(utils.capitalize({})).toBe('');
});

test('Argument is [] (empty array)', () => {
  expect(utils.capitalize([])).toBe('');
});

test('Argument is Date', () => {
  expect(utils.capitalize(new Date())).toBe('');
});

test('Argument is number 12345', () => {
  expect(utils.capitalize(12345)).toBe('');
});

test('Argument is \'\' (empty string)', () => {
  expect(utils.capitalize('')).toBe('');
});

test('Argument is string with only numbers \'12345\'', () => {
  expect(utils.capitalize('12745')).toBe('12745');
});

test('Argument is string start with number \'15 days\'', () => {
  expect(utils.capitalize('15 days')).toBe('15 days');
});

test('Argument is string start with space \' space first\'', () => {
  expect(utils.capitalize(' space first')).toBe(' space first');
});

test('Argument is string start with lowercase letter \'some text\'', () => {
  expect(utils.capitalize('some text')).toBe('Some text');
});

test('Argument is string start with uppercase letter \'Some text\'', () => {
  expect(utils.capitalize('Some text')).toBe('Some text');
});