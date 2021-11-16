import random from './random.js';

export default function sample(arr) {
  return arr[~~random(0, arr.length)];
};