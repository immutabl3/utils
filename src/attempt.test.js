import test from 'tape';
import attempt from './attempt.js';
import isError from './isError.js';

test('attempt', assert => {
  const value = attempt(() => 1);
  assert.is(value, 1);
  
  const accessErr = attempt(() => ({}).foo.bar = 'baz');
  assert.ok(isError(accessErr));
  
  const thrownErr = attempt(() => {
    throw new Error('error');
  });
  assert.ok(isError(thrownErr));

  assert.end();
});