import test from 'tape';
import rgba from './rgba.js';

test('rgba', assert => {
  assert.is(rgba('#000000', 0.5), 'rgba(0, 0, 0, 0.5)');
  assert.is(rgba('#ffffff', 0.5), 'rgba(255, 255, 255, 0.5)');
  assert.end();
});