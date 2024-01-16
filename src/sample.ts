import random from './random';

export default function sample<T>(arr: T[]): T {
  return arr.at(~~random(0, arr.length)) as T;
};