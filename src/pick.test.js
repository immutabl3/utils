import test from 'tape';
import pick from './pick.js';

test('pick', assert => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3,
  };

  const obj2 = pick(obj, ['baz']);

  assert.same(obj2, {
    baz: 3,
  });

  assert.isNot(obj, obj2);

  assert.end();
});