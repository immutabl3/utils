import test from 'tape';
import escape from './escape.js';

test('escape', assert => {
  assert.is(escape('foo'), 'foo');
  assert.is(escape('Hello World!'), 'Hello World!');
  assert.is(escape('<script src="js" />'), '&lt;script src=&quot;js&quot; /&gt;');

  assert.end();
});