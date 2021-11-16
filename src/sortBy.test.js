import test from 'tape';
import sortBy from './sortBy.js';

test('sortBy', assert => {
  const arr = [
    { index: 3 },
    { index: 2 },
    { index: 1 },
  ];

  assert.same(sortBy(arr, 'index'), [
    { index: 1 },
    { index: 2 },
    { index: 3 },
  ]);
  assert.same(sortBy(arr, ({ index }) => index), [
    { index: 1 },
    { index: 2 },
    { index: 3 },
  ]);
  
  assert.end();
});