import { expect, test } from 'bun:test';
import throttle from './throttle';
import wait from './wait';

test('throttle', async function() {
  await (async function() {
    const arr = [];
  
    const fn = throttle(() => arr.push(true), 16, { leading: true });
    fn();
    fn();
    fn();

    expect(arr.length).toBe(1);
  }());

  await (async function() {
    const arr = [];

    const fn = throttle(() => arr.push(true), 16);
    fn();
    fn();
    fn();

    await wait(16);

    expect(arr.length).toBe(1);
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

    expect(arr.length).toBe(2);
  }());
});