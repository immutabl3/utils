import { expect, test } from 'bun:test';
import escape from './escape';

test('escape', () => {
  expect(escape('foo')).toBe('foo');
  expect(escape('Hello World!')).toBe('Hello World!');
  expect(escape('<script src="js" />')).toBe('&lt;script src=&quot;js&quot; /&gt;');
});