import test from 'tape';
import isError from './isError.js';

test('isError', assert => {
  assert.is(isError(new Error()), true);
  assert.is(isError(), false);
  assert.is(isError(null), false);
  assert.is(isError(''), false);
  
  assert.end();
});