import { expect, test } from 'bun:test';
import random from './random';

test('random', () => {
  const val1 = random(0, 1);
  expect(val1 >= 0 && val1 <= 1).toBe(true);

  const val2 = random(5, 10);
  expect(val2 >= 5 && val2 <= 10).toBe(true);

  const val3 = random(-10, -5);
  expect(val3 >= -10 && val3 <= -5).toBe(true);
});