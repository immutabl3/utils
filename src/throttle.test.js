import test from 'tape';
import throttle from './throttle.js';
import wait from './wait.js';

test('throttle', async function(assert) {
  assert.plan(3);
  
  await (async function() {
    const arr = [];
  
    const fn = throttle(() => arr.push(true), 16, { leading: true });
    fn();
    fn();
    fn();

    assert.is(arr.length, 1);
  }());

  await (async function() {
    const arr = [];

    const fn = throttle(() => arr.push(true), 16);
    fn();
    fn();
    fn();

    await wait(16);

    assert.is(arr.length, 1);
  }());
  
  await (async function() {
    const arr = [];

    const fn = throttle(() => arr.push(true), 16);
    fn();
    fn();
    
    await wait(16 * 2);
    fn();
    fn();

    await wait(16 * 2);

    assert.is(arr.length, 2);
  }());
});