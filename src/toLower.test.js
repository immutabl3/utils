import test from 'tape';
import toLower from './toLower.js';

test('toLower', assert => {
  assert.is(toLower('ABC'), 'abc');
  assert.is(toLower('|,"'), '|,"');
  assert.end();
});