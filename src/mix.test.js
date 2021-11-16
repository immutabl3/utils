import test from 'tape';
import mix from './mix.js';

test('mix', assert => {
  let value;
  let accessed = false;
  const result = mix({
    get foo() {
      accessed = true;
    },
  }, {
    set foo(val) {
      value = val;
    },
  });

  assert.is(accessed, false);
  assert.is(value, undefined);
  assert.ok('foo' in result);
  assert.same(result, { foo: undefined });

  result.foo = 1;
  assert.is(value, 1);

  assert.end();
});