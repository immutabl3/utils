import test from 'tape';
import debounce from './debounce.js';
import wait from './wait.js';

test('debounce', async function(assert) {
  assert.plan(3);
  
  await (async function() {
    const arr = [];
  
    const fn = debounce(() => arr.push(true), 0, { leading: true });
    fn();
    fn();
    fn();

    assert.is(arr.length, 1);
  }());

  await (async function() {
    const arr = [];

    const fn = debounce(() => arr.push(true));
    fn();
    fn();
    fn();

    await wait(16);

    assert.is(arr.length, 1);
  }());
  
  await (async function() {
    const arr = [];

    const fn = debounce(() => arr.push(true), 0);
    fn();
    fn();
    
    await wait(16);
    fn();
    fn();

    await wait(16);

    assert.is(arr.length, 2);
  }());
});