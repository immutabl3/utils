import test from 'tape';
import omit from './omit.js';

test('omit', assert => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3,
  };

  const obj2 = omit(obj, ['baz']);

  assert.same(obj2, {
    foo: 1,
    bar: 2,
  });

  assert.isNot(obj, obj2);

  assert.end();
});