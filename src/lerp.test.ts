import { expect, test } from 'bun:test';
import lerp from './lerp';
import isNumber from './isNumber';

test('lerp', () => {
  expect(isNumber(lerp(0, 1))).toBeTrue();

  const lerped = lerp(0, 1);
  expect(lerped > 0 && lerped < 1).toBeTrue();
});