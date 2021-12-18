import test from 'tape';
import isSymbol from './isSymbol.js';

test('isSymbol', assert => {
  assert.is(isSymbol(''), false);
  assert.is(isSymbol(), false);
  assert.is(isSymbol(null), false);
  assert.is(isSymbol({}), false);
  assert.is(isSymbol([]), false);
  assert.is(isSymbol(Symbol('symbol')), true);

  assert.end();
});