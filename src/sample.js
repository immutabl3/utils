import random from './random';

export default function sample(arr) {
  return arr[~~random(0, arr.length)];
};