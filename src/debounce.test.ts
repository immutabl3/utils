import { expect, test } from 'bun:test';
import debounce from './debounce';
import wait from './wait';

test('debounce', async function() { 
  await (async function() {
    const arr = [];
  
    const fn = debounce(() => arr.push(true), 0, { leading: true });
    fn();
    fn();
    fn();

    expect(arr.length).toBe(1);
  }());

  await (async function() {
    const arr = [];

    const fn = debounce(() => arr.push(true));
    fn();
    fn();
    fn();

    await wait(16);

    expect(arr.length).toBe(1);
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

    expect(arr.length).toBe(2);
  }());
});