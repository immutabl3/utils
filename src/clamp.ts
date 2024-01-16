// https://github.com/hughsk/clamp/blob/master/index.js
export default function clamp(value: number, min: number, max = Number.MAX_SAFE_INTEGER): number {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value);
};