import test from 'tape';
import get from './get.js';

test('get', assert => {
  assert.is(get({ foo: { bar: { baz: true } } }, ['foo', 'bar', 'baz']), true);
  assert.is(get({}, ['foo', 'bar', 'baz']), undefined);
  assert.same(get({ foo: { bar: { baz: true } } }, []), { foo: { bar: { baz: true } } });

  assert.end();
});