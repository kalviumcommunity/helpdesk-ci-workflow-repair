const test = require('node:test');
const assert = require('node:assert/strict');
const { countTickets } = require('../src/tickets');

test('empty list returns zero', () => assert.equal(countTickets([]), 0));
test('one ticket returns one', () => assert.equal(countTickets(['A']), 1));
test('three tickets return three', () => assert.equal(countTickets(['A', 'B', 'C']), 3));
